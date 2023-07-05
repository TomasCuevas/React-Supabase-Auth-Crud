import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useStore } from "zustand";

//* SUPABASE CLIENT *//
import { supabase } from "./supabase";

//* PAGES *//
import { HomePage, LoginPage, NotFound } from "./pages";

//* STORE *//
import { useTaskStore } from "./store";

export const App: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useStore(useTaskStore);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-900 px-[5%] py-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
