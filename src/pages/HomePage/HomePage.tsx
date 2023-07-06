//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* COMPONENT *//
import { Button, TaskForm, TaskList } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="ml-auto">
        <Button.Alternative
          type="button"
          text="Cerrar Sesión"
          onClick={() => supabase.auth.signOut()}
        />
      </div>

      <div className="flex w-full justify-center">
        <div className="max-w-[600px] w-full">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
};
