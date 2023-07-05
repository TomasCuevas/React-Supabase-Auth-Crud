import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

//* PAGES *//
import { HomePage, LoginPage, NotFound } from "./pages";
import { supabase } from "./supabase";

export const App: React.FC = () => {
  const navigate = useNavigate();

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
