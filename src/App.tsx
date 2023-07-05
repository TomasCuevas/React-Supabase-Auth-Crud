import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

//* SUPABASE CLIENT *//
import { supabase } from "./supabase";

//* PAGES *//
import { HomePage, LoginPage, NotFound } from "./pages";

export const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <main className="w-full min-h-screen bg-gray-900 px-[5%] py-3">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};
