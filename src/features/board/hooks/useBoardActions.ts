import { useBoard } from "./useBoard";
import { createBoard, deleteBoard, updateBoard } from "../state/board.actions";

import type { Board } from "@/features/board/types/Board";

export const useBoardActions = () => {
  const { dispatch } = useBoard();

  return {
    createBoard: (payload: Board) => dispatch(createBoard(payload)),
    deleteBoard: (payload: string) => dispatch(deleteBoard(payload)),
    updateBoard: (payload: Board) => dispatch(updateBoard(payload)),
  };
};
