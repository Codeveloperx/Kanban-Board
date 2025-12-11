import { useReducer } from "react";
import { BoardContext } from "./BoardContext";
import { boardReducer } from "../reducers/board/boardReducer";
import { initialBoardState } from "../types/BoardState";

interface BoardProviderProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const [state, dispatch] = useReducer(boardReducer, initialBoardState);

  return <BoardContext value={{ state, dispatch }}>{children}</BoardContext>;
};
