import { Routes, Route } from "react-router-dom";
import DefaultHome from "../pages/DefaultHome";

export default () => {
  return (
  <Routes>
    <Route path="/" element={<DefaultHome />} />
  </Routes>
  )
};
