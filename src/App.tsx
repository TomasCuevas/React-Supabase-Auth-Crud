import { Route, Routes } from "react-router-dom";

//* PAGES *//
import { HomePage, LoginPage, NotFound } from "./pages";

export const App: React.FC = () => {
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
