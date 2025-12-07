import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import ServiceDetails from "../Pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/add-services",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/my-profile",
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth</h2>,
  },
]);

export default router;
