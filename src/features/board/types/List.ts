export interface List {
  id: string;
  boardId: string;
  title: string;
  description?: string;
  color?: string;
  position: number;
  collapsed: boolean;
  // tasks: Task[];
}
