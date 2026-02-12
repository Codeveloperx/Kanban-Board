import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const useBoard = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext(Board) must be used within a BoardProvider");
  }

  return { state: context.boards, dispatch: context.dispatchBoards };
};
