import { createBrowserRouter } from "react-router-dom";
import { errorRoutes } from "./errorRoutes";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [...publicRoutes, ...privateRoutes, ...errorRoutes],
  },
]);
