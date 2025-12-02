import { Outlet, type RouteObject } from "react-router-dom";
import { ROUTES } from "./routes.config";

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: (
      <main className="flex-1">
        <Outlet />
      </main>
    ),
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
