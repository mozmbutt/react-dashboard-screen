import React from "react"
import { Navigate, Outlet } from "react-router-dom";

function CompanyRouteGaurd({ isCompany }) {
  return isCompany() ? <Outlet /> : <Navigate to="/" />;
}

export default CompanyRouteGaurd
