//* COMPONENT *//
import { Button } from "../";

//* INTERFACES *//
import { ITask } from "../../intefaces";

interface Props {
  task: ITask;
}

export const TaskCard: React.FC<Props> = ({ task }) => {
  const handleDelete = () => alert("Eliminar");
  const handleToggle = () => alert("Toggle");

  return (
    <li>
      <div className="text-white flex gap-5 items-center">
        <span>{task.name}</span>
        {JSON.stringify(task.done)}
        <div className="flex  gap-2">
          <Button.Red text="Eliminar" type="button" onClick={handleDelete} />
          <Button.Green text="Completar" type="button" onClick={handleToggle} />
        </div>
      </div>
    </li>
  );
};