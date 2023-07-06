import { create } from "zustand";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* STORE INTERFACES *//
import { ITask } from "../../intefaces";

interface TaskState {
  tasks: ITask[];
  done: boolean;
  isLoadingTasks: boolean;
  toggleDone(value: boolean): void;
  getTasks(): Promise<void>;
  createTask(taskName: string): Promise<ITask[]>;
  updateTask(taskId: number, updateField: Partial<ITask>): Promise<ITask[]>;
  deleteTask(taskId: number): Promise<ITask[]>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  done: false,
  isLoadingTasks: false,

  toggleDone(value) {
    set(() => ({ done: value }));
  },

  //! GET TASKS
  async getTasks() {
    const { done } = get();

    set(() => ({ isLoadingTasks: true }));

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("tasks")
      .select()
      .eq("userId", user?.id)
      .eq("done", done)
      .order("id", { ascending: true })
      .select();

    if (data) {
      set(() => ({ tasks: data, isLoadingTasks: false }));
    }
  },

  //! CREATE TASK
  async createTask(taskName) {
    const { getTasks } = get();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .insert({ name: taskName, userId: user?.id })
      .select();

    if (error) throw error;

    set((state) => ({ tasks: [...state.tasks, ...data] }));
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
