import { useEffect } from "react";
import { useStore } from "zustand";

//* COMPONENT *//
import { Badge, Icon, TaskCard } from "../";

//* STORE *//
import { useTaskStore } from "../../store";

export const TaskList: React.FC = () => {
  const { tasks, getTasks, isLoadingTasks, done, toggleDone } =
    useStore(useTaskStore);

  useEffect(() => {
    getTasks();
  }, [done]);

  return (
    <>
      <header className="mt-10 mb-3 w-full flex justify-end gap-3 items-center">
        <Badge.Green
          text="Tareas completadas"
          onClick={() => toggleDone(true)}
          selected={done}
        />
        <Badge.Red
          text="Tareas pendientes"
          onClick={() => toggleDone(false)}
          selected={!done}
        />
      </header>
      <ul className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {isLoadingTasks && (
          <div className="w-full justify-center flex mt-5 h-8">
            <Icon.Loader />
          </div>
        )}
      </ul>
    </>
  );
};
