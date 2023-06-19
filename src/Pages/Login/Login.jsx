import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../Hooks/userAuth";
import Social from "../SheardPage/SocialLogin/Social";
// import { useRef } from "react";

const Login = () => {
  const { singIn, forgetPassword } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigat = useNavigate();
  const location = useLocation();
  // const emailRef = useRef();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password).then((res) => {
      const logdUser = res.user;
      console.log(logdUser);
      navigat(from, { replace: true });
    });
    reset();
  };

  // TODO: forget fassword Value Undefind
  const handleForget = (event) => {
    const form = event.target;
    const email = form.email.value;
    console.log(email);

    // if (!email) {
    //   alert("please provite a valid email");
    // }
    // forgetPassword(email)
    //   .then(() => {
    //     alert("Please chack your Email");
    //     return;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <>
      <Helmet>
        <title>Login || Doc-Aid</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=":lg:w-1/2 flex-shrink-0 max-w-sm  ">
            <h1 className="text-5xl font-bold pl-16 mb-4 ">Login now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                <label className="label">
                  <button
                    onClick={handleForget}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline btn-info"
                  value="Login"
                />
                {/* <ImSpinner9 /> */}
                <Social />
                <Link to={"/registretion"} className="ml-6">
                  have no account? <span className="text-red-600">Sign Up</span>
                </Link>
              </div>
              <div className="bg-gray-500 p-4 text-white rounded">
                <h1 className="text-2xl">Login Info</h1>
                <p>email: </p>
                <p>password: </p>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left lg:w-1/2 hidden lg:block">
            <img src="https://i.ibb.co/yhhMd17/docaid-login.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
