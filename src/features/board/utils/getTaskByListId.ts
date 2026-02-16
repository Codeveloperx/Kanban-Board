import type { Task } from "../types/Task";

export const getTaskByListId = (tasks: Task[], listId: string): Task[] => {
  if (!listId) return [];
  return tasks.filter((task) => task.listId === listId);
};
