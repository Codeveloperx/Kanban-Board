import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

export const useBoard = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }

  return context;
};
