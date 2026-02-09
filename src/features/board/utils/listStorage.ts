import { getItems, setItem } from "@/shared/utils/storage";

import type { List } from "../types/List";
import type { ListsState } from "../state/list/list.type";

export const getLists = (): ListsState | null =>
  getItems<ListsState>("Kanban_list");

export const saveLists = (lists: ListsState): void =>
  setItem<ListsState>("Kanban_list", lists);

export const getListId = (id: string): List | null => {
  const data = getLists();

  if (data) {
    const list = data.lists.find((b) => b.id === id);
    return list || null;
  }

  return null;
};
