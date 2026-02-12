import type { Task } from "../../types/Task";

export interface TaskState {
  tasks: Task[];
}

export const TASK_ACTIONS = {
  CREATE: "CREATE_TASK",
  UPDATE: "UPDATE_TASK",
  DELETE: "DELETE_TASK",
} as const;

export type TaskAction =
  | { type: typeof TASK_ACTIONS.CREATE; payload: Task }
  | { type: typeof TASK_ACTIONS.UPDATE; payload: Task }
  | { type: typeof TASK_ACTIONS.DELETE; payload: string };

export const initialTaskState: TaskState = {
  tasks: [],
};
