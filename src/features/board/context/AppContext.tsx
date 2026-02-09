import { createContext } from "react";
import type { BoardAction, BoardState } from "../state/board/board.type";
import type { ListAction, ListsState } from "../state/list/list.type";

export interface AppContextValue {
  boards: BoardState;
  lists: ListsState;
  dispatchBoards: React.Dispatch<BoardAction>;
  dispatchLists: React.Dispatch<ListAction>;
}

export const AppContext = createContext<AppContextValue | null>(null);
