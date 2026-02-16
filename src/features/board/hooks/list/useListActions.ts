import { addList, deleteList, updateList } from "../../state/list/list.actions";
import { useList } from "./useList";

import type { CreateData, List } from "../../types/List";

export const useListActions = () => {
  const { dispatch } = useList();

  return {
    addList: (payload: CreateData) => dispatch(addList(payload)),
    deleteList: (payload: string) => dispatch(deleteList(payload)),
    updateList: (payload: List) => dispatch(updateList(payload)),
  };
};
