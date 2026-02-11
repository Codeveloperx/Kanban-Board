import { BOARD_ACTIONS } from "./board.type";
import type { CreateData, UpdatedData } from "../../types/Board";

export const createBoard = (data: CreateData) => ({
  type: BOARD_ACTIONS.CREATE,
  payload: data,
});

export const deleteBoard = (id: string) => ({
  type: BOARD_ACTIONS.DELETE,
  payload: id,
});

export const updateBoard = (data: UpdatedData) => ({
  type: BOARD_ACTIONS.UPDATE,
  payload: data,
});
