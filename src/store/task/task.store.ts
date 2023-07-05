import { create } from "zustand";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* STORE INTERFACE *//
interface TaskState {
  tasks: any[];
  getTasks(done?: boolean): void;
}

export const useTaskStore = create<TaskState>((set) => ({
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
}));
