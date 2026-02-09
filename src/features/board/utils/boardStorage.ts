import { KEY_STORAGE } from "@/shared/constants/Constants";
import { getItems, setItem } from "@/shared/utils/storage";

import type { Board } from "../types/Board";
import type { BoardState as Boards } from "../state/board/board.type";

export const getBoards = (): Boards | null => getItems<Boards>(KEY_STORAGE);

export const saveBoards = (boards: Boards): void =>
  setItem<Boards>(KEY_STORAGE, boards);

export const getBoardId = (id: string): Board | null => {
  const data = getBoards();

  if (data) {
    const board = data.boards.find((b) => b.id === id);
    return board || null;
  }

  return null;
};
