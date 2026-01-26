import { boardDetailLoader, boardsLoader } from "@/features/board/loaders";
import { BoardDetailPage, BoardsPage } from "@/features/board/pages";
import { BoardRoutes } from "./board/BoardRoutes";
import { DashBoardLayout, OnBoardingLayout } from "@/layout";
import { ROUTES } from "./routes";
import Loading from "@/shared/ui/loading/Loading";
import OnboardingGuard from "./guards/onBoardingGuard";
import OnboardingPage from "@/features/onboarding/page/OnboardingPage";

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
            element: <OnboardingPage />,
          },
        ],
      },

      {
        element: <DashBoardLayout />,
        hydrateFallbackElement: <Loading.Page />,
        children: [
          {
            path: ROUTES.BOARDS,
            element: <BoardsPage />,
            loader: boardsLoader,
            children: BoardRoutes,
          },
          {
            path: ROUTES.DETAIL_BOARD,
            element: <BoardDetailPage />,
            loader: boardDetailLoader,
          },
        ],
      },
    ],
  },
];
