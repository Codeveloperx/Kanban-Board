import { useBoard } from "./useBoard";
import {
  createBoard,
  deleteBoard,
  updateBoard,
} from "../../state/board/board.actions";

import type { CreateData, UpdatedData } from "@/features/board/types/Board";

export const useBoardActions = () => {
  const { dispatch } = useBoard();

  return {
    createBoard: (payload: CreateData) => dispatch(createBoard(payload)),
    deleteBoard: (payload: string) => dispatch(deleteBoard(payload)),
    updateBoard: (payload: UpdatedData) => dispatch(updateBoard(payload)),
  };
};
