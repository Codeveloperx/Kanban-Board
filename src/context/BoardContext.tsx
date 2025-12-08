import { createContext } from "react";
import type { BoardAction, BoardState } from "../types/BoardState";

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
