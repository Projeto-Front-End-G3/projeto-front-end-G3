import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export default () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
