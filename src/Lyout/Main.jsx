import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Pages/SheardPage/navbar/Navbar";
import Footer from "../Pages/SheardPage/Footer/Footer";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("registretion");
  return (
    <>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </>
  );
};

export default Main;
