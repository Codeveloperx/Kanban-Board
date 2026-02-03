import type { Task } from "@/shared/types";

export interface List {
  id: string;
  title: string;
  description?: string;
  color?: string;
  position: number;
  collapsed: boolean;

  tasks: Task[];
  // tasks: TaskID[];
}

export type TaskID = string;
