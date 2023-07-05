//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* COMPONENT *//
import { Button } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Button
        type="button"
        text="Cerrar Sesión"
        onClick={() => supabase.auth.signOut()}
      />
    </div>
  );
};
