import { useFormik } from "formik";

//* SUPABASE CLIENT *//
import { supabase } from "../../supabase";

//* COMPONENTS *//
import { Button, Input } from "../../components";

export const LoginPage: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: async ({ email }) => {
      try {
        const result = await supabase.auth.signInWithOtp({ email });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="w-full flex justify-center">
      <form
        className="max-w-[600px] w-full flex flex-col gap-2 "
        onSubmit={formik.handleSubmit}
      >
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          <span className="mb-1 block">EMAIL</span>
          <Input
            name="email"
            onChange={formik.handleChange}
            placeholder="youremail@google.com"
            type="email"
            value={formik.values.email}
          />
        </label>
        <Button text="Enviar" type="submit" />
      </form>
    </div>
  );
};
