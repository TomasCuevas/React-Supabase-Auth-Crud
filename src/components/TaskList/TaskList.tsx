import { useEffect } from "react";
import { useStore } from "zustand";

//* STORE *//
import { useTaskStore } from "../../store";

export const TaskList: React.FC = () => {
  const { tasks, getTasks } = useStore(useTaskStore);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ul className="my-5 flex flex-col gap-3">
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="text-white flex gap-5">
            <span>{task.name}</span>
            {JSON.stringify(task.done)}
          </div>
        </li>
      ))}
    </ul>
  );
};
