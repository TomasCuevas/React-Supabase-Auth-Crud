import { useEffect } from "react";
import { useStore } from "zustand";

//* COMPONENT *//
import { Loader, TaskCard } from "../";

//* STORE *//
import { useTaskStore } from "../../store";

export const TaskList: React.FC = () => {
  const { tasks, getTasks, isLoadingTasks } = useStore(useTaskStore);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ul className="my-5 flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      {isLoadingTasks && (
        <div className="w-full justify-center flex mt-5">
          <Loader />
        </div>
      )}
    </ul>
  );
};
