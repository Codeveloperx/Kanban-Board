import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const useTask = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext(Task) must be used within a BoardProvider");
  }

  return { state: context.tasks, dispatch: context.dispatchTasks };
};
