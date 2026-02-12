import { useTask } from "./useTask";
import {
  createTask,
  deleteTask,
  updateTask,
} from "../../state/task/task.actions";

import type { Task } from "../../types/Task";

export const useTaskActions = () => {
  const { dispatch } = useTask();

  return {
    addList: (payload: Task) => dispatch(createTask(payload)),
    deleteTask: (payload: string) => dispatch(deleteTask(payload)),
    updateTask: (payload: Task) => dispatch(updateTask(payload)),
  };
};
