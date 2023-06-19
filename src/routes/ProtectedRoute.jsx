import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/userAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loding } = useAuth();
  const location = useLocation();

  // lodin observer
  if (loding) {
    return <div className="  mt-20 md:w-96 mx-auto ">loding....</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
