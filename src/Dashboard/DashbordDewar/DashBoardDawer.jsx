import { Link, Outlet } from "react-router-dom";
import { AiFillAccountBook, AiFillHome } from "react-icons/ai";
import { FaDailymotion } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";

const DashBoardDawer = () => {
  // TODO: lode admin dynamic data

  // const isAdmin = true;

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  text-white bg-[#07332F] ">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link
                  to={"/dashboard/addmindashboard"}
                  className="text-1xl font-normal"
                >
                  <FaDailymotion />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/allusres"}
                  className="text-1xl font-normal"
                >
                  <FaDailymotion />
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/adddoctor"}
                  className="text-1xl font-normal"
                >
                  <FaDailymotion />
                  Add a Doctore
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/mngdoctor"}
                  className="text-1xl font-normal"
                >
                  <FaDailymotion />
                  Manage Doctores
                </Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="">
                <Link
                  to={"/dashboard/appointment"}
                  className="text-xl font-normal"
                >
                  <AiFillAccountBook />
                  My Appointment
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <div>
            <Link to={"/"} className="flex gap-2">
              {" "}
              <AiFillHome /> Home
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardDawer;
