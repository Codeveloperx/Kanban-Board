import { ROUTES } from "./routes";
import NotFoundPage from "../pages/NotFoundPage";

import type { RouteObject } from "react-router-dom";

export const errorRoutes: RouteObject[] = [
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
