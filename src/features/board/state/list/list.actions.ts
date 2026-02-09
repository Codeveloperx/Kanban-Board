import { ActionList } from "./list.type";
import type { List } from "../../types/List";

export const addList = (data: List) => ({
  type: ActionList.CREATE,
  payload: data,
});
