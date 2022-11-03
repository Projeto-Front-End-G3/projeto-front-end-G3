import { Routes, Route } from "react-router-dom";

import RegisterPage from "../pages/RegisterPage";

export default () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
