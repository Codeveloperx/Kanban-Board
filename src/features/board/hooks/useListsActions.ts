import { useLists } from "./useList";
import { addList } from "../state/list/list.actions";

import type { List } from "../types/List";

export const useListsActions = () => {
  const { dispatch } = useLists();

  return {
    createList: (payload: List) => dispatch(addList(payload)),
  };
};
