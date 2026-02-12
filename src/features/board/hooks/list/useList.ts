import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const useList = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext(List) must be used within a BoardProvider");
  }

  return { state: context.list, dispatch: context.dispatchLists };
};
