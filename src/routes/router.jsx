import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import AddService from "../Pages/AddService";
import ServiceDetails from "../components/ServiceDetails";

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
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
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
