import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import useAuth from "./../../../Hooks/userAuth";

const Navbar = () => {
  const { user, logdOut } = useAuth();

  const handleLogOut = () => {
    logdOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navbar = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/appointment"}>Appointment</NavLink>
      </li>
      <li>
        {user ? (
          <button onClick={handleLogOut} className="mt-2">
            Log Out
          </button>
        ) : (
          <Link to={"/login"}>Loging</Link>
        )}
      </li>
    </>
  );

  return (
    <>
      <div className=" max-w-screen-xl navbar bg-base-100 fixed opacity-60 z-40 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost  text-3xl  text-teal-600 uppercase hidden md:block "
          >
            DocAid
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  ">{navbar}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
