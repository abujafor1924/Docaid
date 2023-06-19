import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/userAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const { googleLoge } = useAuth();
  const navigat = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleLoge()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigat(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider ">Login With Social</div>
      <div className="w-full text-center my-4 flex gap-4 justify-center">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-warning  "
        >
          <FaGoogle /> Google
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-warning "
        >
          <FaGoogle /> Google
        </button>
      </div>
    </div>
  );
};

export default Social;
