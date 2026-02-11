import { getItems, setItem } from "@/shared/utils";

import type { Board } from "../types/Board";
import type { BoardState as Boards } from "../state/board/board.type";
import type { ListState } from "../state/list/list.type";
import type { TaskState } from "../state/task/task.type";

export const STORAGE_KEYS = {
  BOARDS: "kanban_boards",
  LISTS: "kanban_lists",
  TASKS: "kanban_tasks",
} as const;

export const storage = {
  boards: {
    save: (boards: Boards) => setItem(STORAGE_KEYS.BOARDS, boards),
    load: () => getItems<Boards>(STORAGE_KEYS.BOARDS),
    loadById: (id: string): Board | null => {
      const boards = getItems<Boards>(STORAGE_KEYS.BOARDS);
      return boards?.boards.find((b) => b.id === id) ?? null;
    },
  },

  lists: {
    save: (lists: ListState) => setItem(STORAGE_KEYS.LISTS, lists),
    load: () => getItems<ListState>(STORAGE_KEYS.LISTS),
  },

  tasks: {
    save: (tasks: TaskState) => setItem(STORAGE_KEYS.TASKS, tasks),
    load: () => getItems<TaskState>(STORAGE_KEYS.TASKS),
  },
};
