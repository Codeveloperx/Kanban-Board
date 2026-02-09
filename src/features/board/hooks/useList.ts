import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useLists = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useListContext must be used within a BoardProvider");
  }

  return { state: context.lists, dispatch: context.dispatchLists };
};
