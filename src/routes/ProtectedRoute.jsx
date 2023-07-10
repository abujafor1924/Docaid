import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/userAuth";
import Loder from "../Pages/SheardPage/Loder/Loder";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // lodin observer
  if (loading) {
    return <Loder />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
