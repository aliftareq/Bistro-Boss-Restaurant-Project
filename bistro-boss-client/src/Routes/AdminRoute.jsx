import React from "react";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../pages/shared/LoadingSpinner/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const location = useLocation();

  if (isLoading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
