import { ActionBoard, type Board } from "@/types";

export const createBoard = (data: Board) => ({
  type: ActionBoard.CREATE,
  payload: data,
});

export const deleteBoard = (id: string) => ({
  type: ActionBoard.DELETE,
  payload: id,
});
