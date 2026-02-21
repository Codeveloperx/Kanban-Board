import { useMemo } from "react";
import { useList } from "./list";

export const useListById = (id?: string | null) => {
  const { state } = useList();

  return useMemo(
    () => state.lists.find((list) => list.id === id),
    [state.lists, id],
  );
};
