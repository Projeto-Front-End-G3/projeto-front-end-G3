import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardLogged from "../pages/dashboardUserLogado/index";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export default () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    {/* <Route path="/dashboard" element={<DashboardLogged />} /> */}
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
