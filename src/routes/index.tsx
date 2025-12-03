import { createBrowserRouter } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";
import { ROUTES } from "./routes.config";

export const router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes,
  {
    path: ROUTES.NOT_FOUND,
    element: <h1 className="font-bold text-3xl">Not Found</h1>,
  },
]);
