import { createBrowserRouter } from "react-router-dom";
import Main from "../Lyout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import Registretion from "../Pages/RegistretionPage/Registretion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registretion",
        element: <Registretion />,
      },
    ],
  },
]);
