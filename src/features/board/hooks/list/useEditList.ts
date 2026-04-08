import { useCallback, useState } from "react";

export const useEditList = () => {
  const [editingListId, setEditingListId] = useState<string | null>(null);

  const startEditing = useCallback((id: string) => setEditingListId(id), []);
  const stopEditing = useCallback(() => setEditingListId(null), []);

  return {
    editingListId,
    startEditing,
    stopEditing,
  };
};
