import {
  createBoard,
  deleteBoard,
  updateBoard,
} from "../state/board/board.actions";
import { useBoard } from "./useBoard";

import type { Board } from "@/features/board/types/Board";

export const useBoardActions = () => {
  const { dispatchBoards } = useBoard();

  return {
    createBoard: (payload: Board) => dispatchBoards(createBoard(payload)),
    deleteBoard: (payload: string) => dispatchBoards(deleteBoard(payload)),
    updateBoard: (payload: Board) => dispatchBoards(updateBoard(payload)),
  };
};
