import CreateBoardModal from "@/features/board/modals/CreateBoard";
import UpdateBoard from "@/features/board/modals/UpdateBoard";
import { ROUTES } from "../routes";

import type { RouteObject } from "react-router-dom";

export const BoardRoutes: RouteObject[] = [
  {
    path: ROUTES.NEW_BOARD,
    element: <CreateBoardModal />,
  },
  {
    path: ROUTES.EDIT_BOARD,
    element: <UpdateBoard />,
  },
];
