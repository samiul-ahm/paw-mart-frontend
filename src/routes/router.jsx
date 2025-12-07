import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/auth",
    element: <h2>Auth</h2>,
  },
  //   {
  //     path: "/*",
  //     Component: ErrorPage,
  //   },
]);

export default router;
