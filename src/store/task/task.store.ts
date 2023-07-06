import { create } from "zustand";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* STORE INTERFACES *//
import { ITask } from "../../intefaces";

interface TaskState {
  tasks: ITask[];
  isLoadingTasks: boolean;
  getTasks(done?: boolean): Promise<void>;
  createTask(taskName: string): Promise<ITask[]>;
  updateTask(taskId: number, updateField: Partial<ITask>): Promise<ITask[]>;
  deleteTask(taskId: number): Promise<ITask[]>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  isLoadingTasks: true,

  //! GET TASKS
  async getTasks(done) {
    set(() => ({ isLoadingTasks: true }));

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .select()
      .eq("userId", user?.id)
      .eq("done", done)
      .order("id", { ascending: true });

    if (error) throw error;

    set(() => ({ tasks: data, isLoadingTasks: false }));
  },

  //! CREATE TASK
  async createTask(taskName) {
    const { tasks, getTasks } = get();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .insert({ name: taskName, userId: user?.id })
      .select();

    if (error) throw error;

    set(() => ({ tasks: [...tasks, ...data] }));
    getTasks();

    return data;
  },

  //! UPDATE TASK
  async updateTask(taskId, updateField) {
    const { getTasks } = get();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .update(updateField)
      .eq("userId", user?.id)
      .eq("id", taskId)
      .select();

    if (error) throw error;

    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === taskId) task = data[0];
        return task;
      }),
    }));
    getTasks();

    return data;
  },

  //! DELETE TASK
  async deleteTask(taskId) {
    const { getTasks } = get();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error, data } = await supabase
      .from("tasks")
      .delete()
      .eq("userId", user?.id)
      .eq("id", taskId)
      .select();

    if (error) throw error;

    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
    getTasks();

    return data;
  },
}));
