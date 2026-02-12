import { boardReducer } from "../../state/board/board.reducer";
import { initialBoardState as initialState } from "../../state/board/board.type";
import { storage } from "../../utils/boardStorage";
import { useReducer, useEffect } from "react";

export const useBoardReducer = () => {
  const [boards, dispatchBoards] = useReducer(
    boardReducer,
    initialState,
    (init) => {
      return storage.boards.load() || init;
    },
  );

  useEffect(() => {
    storage.boards.save(boards);
  }, [boards]);

  return { boards, dispatchBoards };
};
