import { useStore } from "zustand";
import { useFormik } from "formik";

//* COMPONENTS *//
import { Button, Input, Loader } from "../";

//* STORE *//
import { useTaskStore } from "../../store";

export const TaskForm: React.FC = () => {
  const { createTask } = useStore(useTaskStore);

  const formik = useFormik({
    initialValues: { task: "" },
    onSubmit: async (formValues) => {
      try {
        const result = await createTask(formValues.task);
        console.log(result);
        formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col gap-2 p-2 border rounded-lg border-white/50"
    >
      <Input
        name="task"
        onChange={formik.handleChange}
        placeholder="Nombre de la tarea"
        type="text"
        value={formik.values.task}
      />
      <Button.Blue
        type="submit"
        text="Crear tarea"
        loading={formik.isSubmitting}
        loader={Loader}
        isDisabled={formik.isSubmitting}
      />
    </form>
  );
};
