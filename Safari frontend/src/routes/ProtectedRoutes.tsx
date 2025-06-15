import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

type ProtectedRoutesProps = {
  allowedRoles?: string[]; 
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ allowedRoles = [] }) => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles.length > 0 && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
