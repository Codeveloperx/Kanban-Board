import { initialTaskState as initialState } from "../../state/task/task.type";
import { storage } from "../../utils/boardStorage";
import { taskReducer } from "../../state/task/task.reducer";
import { useReducer, useEffect } from "react";

export const useTaskReducer = () => {
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialState, (init) => {
    return storage.tasks.load() || init;
  });

  useEffect(() => {
    storage.tasks.save(tasks);
  }, [tasks]);

  return { tasks, dispatchTasks };
};
