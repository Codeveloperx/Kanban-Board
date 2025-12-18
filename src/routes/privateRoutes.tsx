import DashBoardLayout from "../layouts/DashboardLayout";
import { ROUTES } from "./routes.config";
import { type RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    Component: DashBoardLayout,
    children: [
      {
        index: true,
        element: <h1 className="font-bold text-3xl">Home Page</h1>,
      },
      {
        path: ROUTES.BOARDS,
        element: <h1 className="font-bold text-3xl">Boards</h1>,
      },
      {
        path: ROUTES.BOARD_DETAIL,
        element: <h1 className="font-bold text-3xl">Board Detail</h1>,
      },
    ],
  },
];
