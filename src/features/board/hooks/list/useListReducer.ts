import { initialListState as initialState } from "../../state/list/list.type";
import { listReducer } from "../../state/list/list.reducer";
import { useReducer, useEffect } from "react";
import { storage } from "../../utils/boardStorage";

export const useListReducer = () => {
  const [list, dispatchLists] = useReducer(
    listReducer,
    initialState,
    (init) => {
      return storage.lists.load() || init;
    },
  );

  useEffect(() => {
    storage.lists.save(list);
  }, [list]);

  return { list, dispatchLists };
};
