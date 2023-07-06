import { useEffect, useState } from "react";
import { useStore } from "zustand";

//* COMPONENT *//
import { Badge, Loader, TaskCard } from "../";

//* STORE *//
import { useTaskStore } from "../../store";

export const TaskList: React.FC = () => {
  const { tasks, getTasks, isLoadingTasks } = useStore(useTaskStore);
  const [done, setDone] = useState(false);

  const toggleDone = () => setDone((prev) => !prev);

  useEffect(() => {
    getTasks(done);
  }, [done]);

  return (
    <>
      <header className="mt-7 mb-3 w-full flex justify-end gap-3 items-center">
        <Badge.Green
          text="Tareas completadas"
          onClick={toggleDone}
          selected={done}
        />
        <Badge.Red
          text="Tareas pendientes"
          onClick={toggleDone}
          selected={!done}
        />
      </header>
      <ul className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {isLoadingTasks && (
          <div className="w-full justify-center flex mt-5">
            <Loader />
          </div>
        )}
      </ul>
    </>
  );
};
