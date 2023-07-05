import { useFormik } from "formik";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* COMPONENTS *//
import { Button, Input } from "../";

export const TaskForm: React.FC = () => {
  const formik = useFormik({
    initialValues: { task: "" },
    onSubmit: async (formValues) => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        const result = await supabase
          .from("tasks")
          .insert({ name: formValues.task, userId: user?.id });

        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-2">
      <Input
        name="task"
        onChange={formik.handleChange}
        placeholder="Nombre de la tarea"
        type="text"
        value={formik.values.task}
      />
      <Button type="submit" text="Crear tarea" />
    </form>
  );
};
