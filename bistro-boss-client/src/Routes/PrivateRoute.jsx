import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../pages/shared/LoadingSpinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
