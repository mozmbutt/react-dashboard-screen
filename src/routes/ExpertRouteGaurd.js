import React from "react"
import { Navigate, Outlet } from "react-router-dom";

function ExpertRouteGaurd({ isExpert }) {
  return isExpert() ? <Outlet /> : <Navigate to="/" />;
}

export default ExpertRouteGaurd
