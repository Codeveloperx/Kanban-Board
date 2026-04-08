import {
  addList,
  collapsedList,
  deleteList,
  updateList,
} from "../../state/list/list.actions";
import { useList } from "./useList";

import type { CreateData, UpdatedData } from "../../types/List";

export const useListActions = () => {
  const { dispatch } = useList();

  return {
    addList: (payload: CreateData) => dispatch(addList(payload)),
    updateList: (payload: UpdatedData) => dispatch(updateList(payload)),
    deleteList: (payload: string) => dispatch(deleteList(payload)),
    collapsedList: (payload: string) => dispatch(collapsedList(payload)),
  };
};
