import { boardReducer } from "../reducers/board/boardReducer";
import { getBoards, saveBoards } from "../utils/boardStorage";
import { initialBoardState as initialState } from "../types/BoardState";
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
