import { Routes, Route } from "react-router-dom";
import DashboardLogged from '../pages/dashboardUserLogado/index'

export default () => {
  return (
    <Routes>
      <Route path='/dashboardLogged' element={<DashboardLogged />} />
    </Routes>
  );
};
