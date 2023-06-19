import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/userAuth";
import Social from "../SheardPage/SocialLogin/Social";

const image_hoisting_token = import.meta.env.VITE_image_uplode_token;
const Registretion = () => {
  const { createUser, UpadteUser } = useAuth();
  const navigat = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [error, seterror] = useState(false);
  const imge_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //  fill upload Form Data
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imge_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((photos) => {
        console.log(photos);
        if (photos.success) {
          const imgUrl = photos.data.display_url;
          console.log(imgUrl);
          createUser(data.email, data.password)
            .then((result) => {
              const logdUser = result.user;
              console.log(logdUser);
              UpadteUser(data.name, imgUrl)
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
              navigat(from, { replace: true });
            })
            .catch((error) => console.log(error));
        }
      });

    // password Confirm Validetion
    if (data.password !== data.conpassword) {
      seterror(true);
      return;
    }

    reset();
  };
  return (
    <>
      <Helmet>
        <title>Registretion || Doc-Aid</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=" lg:w-1/2 flex-shrink-0 max-w-sm w-full mt-8">
            <h1 className="text-5xl font-bold pl-16 mb-4">Registretion</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name Section */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              {/* Name Section */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                />
                {errors.image && (
                  <span className="text-red-600">Image field is required</span>
                )}
              </div>
              {/* Email Section */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              {/* Password Section */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-300">
                    Password field is required
                  </span>
                )}

                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">is less than 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    don,t have a capital letter and don,t have a special
                    character
                  </p>
                )}
                <p
                  className="absolute right-0 top-12 text-2xl"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <span>
                      {" "}
                      <FaEyeSlash />
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <FaEye />
                    </span>
                  )}
                </p>
              </div>
              {/* ConPassword Section */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirme Password</span>
                </label>
                <input
                  type={shows ? "text" : "password"}
                  placeholder="Confirme password"
                  {...register("conpassword", { required: true })}
                  className="input input-bordered"
                />
                <p
                  className="absolute right-0 top-12 text-2xl"
                  onClick={() => setShows(!shows)}
                >
                  {shows ? (
                    <span>
                      <FaEyeSlash />
                    </span>
                  ) : (
                    <span>
                      <FaEye />
                    </span>
                  )}
                </p>
                {errors.conpassword && (
                  <span className="text-red-600">
                    conpassword field is required
                  </span>
                )}
                {error && (
                  <span className="text-red-600 text-sm text-left">
                    password do not match
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline btn-info"
                  value="Registretion"
                />
                <Social />

                <Link to={"/login"}>
                  have a account? <span className="text-red-600">Login</span>
                </Link>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left   lg:w-1/2 hidden lg:block">
            <img
              src="https://i.ibb.co/5T5JCKz/doc-aid-registretion.jpg"
              className="h-[800px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registretion;
