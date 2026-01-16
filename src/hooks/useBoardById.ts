import { useMemo } from "react";
import { useBoard } from "@/hooks/useBoard";

export const useBoardById = (id?: string | null) => {
  const { state } = useBoard();

  return useMemo(
    () => state.boards.find((board) => board.id === id),
    [state.boards, id]
  );
};
