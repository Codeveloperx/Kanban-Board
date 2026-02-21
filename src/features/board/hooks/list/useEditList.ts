import { getListByBoardId } from "../../utils/getListByBoardId";
import { useCallback, useMemo, useState } from "react";
import { useList } from "./useList";

export const useEditList = (boardId: string) => {
  const { state } = useList();
  const [editingListId, setEditingListId] = useState<string | null>(null);

  const lists = useMemo(
    () => getListByBoardId(state.lists, boardId),
    [state.lists, boardId],
  );

  const startEditing = useCallback((id: string) => setEditingListId(id), []);
  const stopEditing = useCallback(() => setEditingListId(null), []);

  return {
    lists,
    editingListId,
    startEditing,
    stopEditing,
  };
};
