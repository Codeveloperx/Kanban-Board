import DashBoardLayout from "../layouts/DashBoardLayout";
import OnBoardingLayout from "../layouts/OnBoardingLayout";
import Boards from "../pages/boards/Boards";
import Home from "../pages/home/Home";
import OnboardingGuard from "./onBoardingGuard";
import { ROUTES } from "./routes.config";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    element: <OnboardingGuard />,
    children: [
      {
        element: <OnBoardingLayout />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />,
          },
        ],
      },

      {
        element: <DashBoardLayout />,
        children: [
          {
            path: ROUTES.BOARDS,
            element: <Boards />,
          },
          {
            path: ROUTES.BOARD_DETAIL,
            element: <h1>Board detail</h1>,
          },
        ],
      },
    ],
  },
];
