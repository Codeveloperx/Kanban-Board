import { createContext } from "react";
import type { BoardAction, BoardState } from "../state/board.type";

const initialState: BoardState = {
  boards: [],
};

export const BoardContext = createContext<{
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
} | null>({
  state: initialState,
  dispatch: () => null,
});
