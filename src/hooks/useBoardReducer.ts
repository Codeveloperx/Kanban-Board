import { boardReducer } from "../reducers/board/boardReducer";
import { initialBoardState as initialState } from "../types/BoardState";
import { useBoardStorage } from "./useBoardStorage";
import { useReducer, useEffect } from "react";

export const useBoardReducer = () => {
  const { load, save } = useBoardStorage();

  const [state, dispatch] = useReducer(boardReducer, initialState, (init) => {
    return load() || init;
  });

  useEffect(() => {
    save(state);
  }, [state]);

  return { state, dispatch };
};
