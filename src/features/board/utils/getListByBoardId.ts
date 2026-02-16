import type { List } from "../types/List";

export const getListByBoardId = (lists: List[], boardId: string): List[] => {
  if (!boardId) return [];
  return lists.filter((list) => list.boardId === boardId);
};
