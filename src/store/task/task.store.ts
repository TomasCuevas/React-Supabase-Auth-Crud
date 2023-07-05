import { create } from "zustand";

//* STORE INTERFACE *//
interface TaskState {
  name: string;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  name: "Hello World!!!",
}));
