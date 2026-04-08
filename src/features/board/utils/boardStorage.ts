import { getItems, setItem } from "@/shared/utils";

import type { BoardState as Boards } from "../state/board/board.type";
import type { ListState } from "../state/list/list.type";
import type { TaskState } from "../state/task/task.type";

export const KEY_BOARDS = "kanban_boards";
export const KEY_LISTS = "kanban_lists";
export const KEY_TASKS = "kanban_tasks";

const saveStorage = <T>(key: string, value: T) => setItem(key, value);
const loadStorage = <T>(key: string) => getItems<T>(key);

export const storage = {
  boards: {
    save: (boards: Boards) => saveStorage(KEY_BOARDS, boards),
    load: () => loadStorage<Boards>(KEY_BOARDS),
  },

  lists: {
    save: (lists: ListState) => saveStorage(KEY_LISTS, lists),
    load: () => loadStorage<ListState>(KEY_LISTS),
  },

  tasks: {
    save: (tasks: TaskState) => saveStorage<TaskState>(KEY_TASKS, tasks),
    load: () => loadStorage<TaskState>(KEY_TASKS),
  },
};
