import { storage } from "./boardStorage";

import type { Board } from "../types/Board";

const boards = storage.boards.load()?.boards || [];

export const boardFilter = {
  getActive: (): Board[] => boards.filter((board) => board.active) || [],
  getById: (id: string): Board | null =>
    boards.find((board) => board.id === id && board.active) || null,
};
