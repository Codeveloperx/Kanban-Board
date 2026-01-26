import { ActionBoard } from "./board.type";

import type { Board } from "../types/Board";

export const createBoard = (data: Board) => ({
  type: ActionBoard.CREATE,
  payload: data,
});

export const deleteBoard = (id: string) => ({
  type: ActionBoard.DELETE,
  payload: id,
});

export const updateBoard = (data: Board) => ({
  type: ActionBoard.UPDATE,
  payload: data,
});
