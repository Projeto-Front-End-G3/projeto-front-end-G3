import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { authorized } = useContext(UserContext);

  return authorized ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
