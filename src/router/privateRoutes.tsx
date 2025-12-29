import { boardsLoader } from "./loader/loader.board";
import { ROUTES } from "./routes";
import Boards from "../pages/boards/Boards";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Home from "../pages/home/Home";
import Loading from "../components/common/loading/Loading";
import OnboardingGuard from "./guards/onBoardingGuard";
import OnBoardingLayout from "../layouts/OnBoardingLayout";

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
        hydrateFallbackElement: <Loading />,
        children: [
          {
            path: ROUTES.BOARDS,
            element: <Boards />,
            loader: boardsLoader,
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
