export interface Task {
  id: string;
  listId: string;
  title: string;
  description?: string;
  status: boolean;
  position: number;
  priority?: "low" | "medium" | "high";
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

export interface Tag {
  id: string;
  label: string;
  color: string;
}
