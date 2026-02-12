import { TASK_ACTIONS } from "./task.type";

import type { Task } from "../../types/Task";

export const createTask = (data: Task) => ({
  type: TASK_ACTIONS.CREATE,
  payload: data,
});

export const updateTask = (data: Task) => ({
  type: TASK_ACTIONS.UPDATE,
  payload: data,
});

export const deleteTask = (id: string) => ({
  type: TASK_ACTIONS.DELETE,
  payload: id,
});
