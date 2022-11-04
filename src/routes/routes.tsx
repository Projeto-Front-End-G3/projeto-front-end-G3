import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";

export default () => (
  <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);
