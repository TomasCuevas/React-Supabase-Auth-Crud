import { useState } from "react";
import { useStore } from "zustand";
import { useFormik } from "formik";

//* COMPONENTS *//
import { Alert, Button, Input } from "../../components";

//* STORE *//
import { useAuthStore } from "../../store";

export const LoginPage: React.FC = () => {
  const { signInWithEmail, signInWithGoogle } = useStore(useAuthStore);
  const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: async ({ email }) => {
      try {
        await signInWithEmail(email);
        setShowAlert(true);
      } catch (error) {
        console.log(error);
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
          <span className="mb-1 block">Correo electrónico</span>
          <Input
            name="email"
            onChange={formik.handleChange}
            placeholder="youremail@google.com"
            type="email"
            value={formik.values.email}
          />
        </label>
        <Button.Blue
          text="Enviar"
          type="submit"
          isLoading={formik.isSubmitting}
        />

        {showAlert && (
          <div className="mt-1 mb-5">
            <Alert.Success text="¡Revisa tu correo y haz clic en el enlace para iniciar sesión!" />
          </div>
        )}

        <Button.Google
          text="Continuar con Google"
          type="button"
          onClick={signInWithGoogle}
        />
      </form>
    </div>
  );
};
