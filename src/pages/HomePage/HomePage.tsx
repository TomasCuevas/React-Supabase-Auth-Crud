//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* COMPONENT *//
import { Button, TaskForm } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="ml-auto">
        <Button
          type="button"
          text="Cerrar Sesión"
          onClick={() => supabase.auth.signOut()}
        />
      </div>

      <div className="flex w-full justify-center">
        <div className="max-w-[600px] w-full">
          <TaskForm />
        </div>
      </div>
    </div>
  );
};
