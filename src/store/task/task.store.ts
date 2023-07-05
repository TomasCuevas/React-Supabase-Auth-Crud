import { create } from "zustand";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* STORE INTERFACE *//
interface TaskState {
  tasks: any[];
  getTasks(done?: boolean): void;
  createTask(taskName: string): void;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],

  //! GET TASKS
  async getTasks(done = false) {
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
    set(() => ({ tasks: data }));
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
}));
