import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GuestRoutes: React.FC = () => {
  const {isLoggedIn} = useAuth() ;

  return !isLoggedIn 
  ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default GuestRoutes;
