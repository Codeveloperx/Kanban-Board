import type { RouteObject } from "react-router-dom";
import { ROUTES } from "./routes.config";

export const publicRoutes: RouteObject[] = [
  {
    path: ROUTES.LOGIN,
    element: <h1 className="font-bold text-3xl">Login Page</h1>,
  },
  {
    path: ROUTES.REGISTER,
    element: <h1 className="font-bold text-3xl">Register Page</h1>,
  },
];
