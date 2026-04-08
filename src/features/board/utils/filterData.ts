import { storage } from "./boardStorage";

import type { Board } from "../types/Board";

const boards = storage.boards.load()?.boards || [];
const lists = storage.lists.load()?.lists || [];
const tasks = storage.tasks.load()?.tasks || [];

export const boardFilter = {
  getActive: (): Board[] => boards.filter((board) => board.active) || [],
  getById: (id: string): Board | null =>
    boards.find((board) => board.id === id) || null,
};

export const listFilter = {
  getByBoardId: (id: string) =>
    lists.filter((list) => list.boardId === id) || [],
};

export const taskFilter = {
  getByListId: (listId: string) =>
    tasks.filter((task) => task.listId === listId) || [],
};

export const getTaskByListId = (listId: string) =>
  tasks.filter((task) => task.listId === listId) || [];
