import { createContext } from "react";

import type { BoardAction, BoardState } from "../state/board/board.type";
import type { ListAction, ListState } from "../state/list/list.type";
import type { TaskAction, TaskState } from "../state/task/task.type";

export interface AppContextValue {
  boards: BoardState;
  dispatchBoards: React.Dispatch<BoardAction>;
  lists: ListState;
  dispatchLists: React.Dispatch<ListAction>;
  tasks: TaskState;
  dispatchTasks: React.Dispatch<TaskAction>;
}

export const AppContext = createContext<AppContextValue | null>(null);
