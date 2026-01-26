import { boardReducer } from "../state/board.reducer";
import { getBoards, saveBoards } from "../utils/boardStorage";
import { initialBoardState as initialState } from "../state/board.type";
import { useReducer, useEffect } from "react";

export const useBoardReducer = () => {
  const [state, dispatch] = useReducer(boardReducer, initialState, (init) => {
    return getBoards() || init;
  });

  useEffect(() => {
    saveBoards(state);
  }, [state]);

  return { state, dispatch };
};
