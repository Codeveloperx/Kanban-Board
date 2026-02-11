import { createBaseEntity } from "../../utils/createBaseEntity";
import { TASK_ACTIONS, type TaskAction, type TaskState } from "./task.type";

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case TASK_ACTIONS.CREATE: {
      const newTask = { ...createBaseEntity, ...action.payload };
      return { tasks: [...state.tasks, newTask] };
    }

    default:
      return state;
  }
};
