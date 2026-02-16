import { LIST_ACTIONS } from "./list.type";

import type { CreateData, List } from "../../types/List";

export const addList = (data: CreateData) => ({
  type: LIST_ACTIONS.CREATE,
  payload: data,
});

export const deleteList = (id: string) => ({
  type: LIST_ACTIONS.DELETE,
  payload: id,
});

export const updateList = (data: List) => ({
  type: LIST_ACTIONS.UPDATE,
  payload: data,
});
