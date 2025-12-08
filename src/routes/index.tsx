import { createBrowserRouter, Navigate } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";
import { ROUTES } from "./routes.config";

export const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  {
    path: ROUTES.NOT_FOUND,
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);
