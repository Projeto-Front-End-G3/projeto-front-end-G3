import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLogged from "../pages/dashboardUserLogado/index";
import Contato from "../pages/Contact";
import Sobre from "../pages/About";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import DefaultHome from "../pages/LandingPage";

export default () => (
  <Routes>
    <Route path="/" element={<DefaultHome />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/contact" element={<Contato />} />
    <Route path="/about" element={<Sobre />} />
    {/* <Route path="/dashboard" element={<DashboardLogged />} /> */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
