import { useReducer, useEffect } from "react";
import { listReducer } from "../state/list/list.reducer";
import { initialListState } from "../state/list/list.type";
import { getLists, saveLists } from "../utils/listStorage";

export const useListReducer = () => {
  const [state, dispatch] = useReducer(
    listReducer,
    initialListState,
    (init) => {
      return getLists() || init;
    },
  );

  useEffect(() => {
    saveLists(state);
  }, [state]);

  return { state, dispatch };
};
