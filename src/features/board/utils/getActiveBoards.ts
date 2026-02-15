import type { Board } from "../types/Board";

export const getActiveBoards = (boards: Board[]): Board[] => {
  const result = boards.filter((board) => board.active);
  return result;
};
