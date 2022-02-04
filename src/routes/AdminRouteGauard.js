import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function GuardedRoute({ isAdmin }) {
  return isAdmin() ? <Outlet /> : <Navigate to="/" />;
}

export default GuardedRoute
