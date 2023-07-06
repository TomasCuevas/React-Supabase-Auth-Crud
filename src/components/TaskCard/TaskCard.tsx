import { useStore } from "zustand";

//* COMPONENT *//
import { Button } from "../";

//* STORE *//
import { useTaskStore } from "../../store";

//* INTERFACES *//
import { ITask } from "../../intefaces";

interface Props {
  task: ITask;
}

export const TaskCard: React.FC<Props> = ({ task }) => {
  const { updateTask, deleteTask } = useStore(useTaskStore);

  const handleDelete = () => deleteTask(task.id);
  const handleToggle = () => updateTask(task.id, { done: !task.done });

  return (
    <li>
      <div className="text-white gap-5 p-4 border flex flex-col rounded-lg bg-gray-800 border-gray-500">
        <h3 className="text-xl font-medium tracking-[0.5px]">{task.name}</h3>
        <div className="flex gap-2 ml-auto items-center">
          {!task.done && (
            <Button.Green
              text="Completar"
              type="button"
              onClick={handleToggle}
            />
          )}
          <Button.Red text="Eliminar" type="button" onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
};
