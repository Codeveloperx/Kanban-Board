export interface List {
  id: string;
  title: string;
  color?: string;
  position: number;
  collapsed: boolean;
  // boardId?: string;

  tasks: TaskID[];
}

export type TaskID = string;
