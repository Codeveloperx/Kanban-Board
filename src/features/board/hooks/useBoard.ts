import { useContext } from "react";
// import { BoardContext } from "../context/BoardContext";
import { AppContext } from "../context/AppContext";

export const useBoard = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }

  return context;
};
