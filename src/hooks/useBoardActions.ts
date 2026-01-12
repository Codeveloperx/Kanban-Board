import { createBoard, deleteBoard } from "@/reducers/board/boardActions";
import { useBoard } from "./useBoard";

import type { Board } from "@/types";

export const useBoardActions = () => {
  const { dispatch } = useBoard();

  return {
    createBoard: (payload: Board) => dispatch(createBoard(payload)),
    deleteBoard: (payload: string) => dispatch(deleteBoard(payload)),
  };
};
