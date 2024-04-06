import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import { PegarVariaveis } from "../context/context";
// import Header from "../components/Header";

export default function AppRouter() {
  return (
    // <PegarVariaveis>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/options" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    // {/* </PegarVariaveis> */}
  );
}
