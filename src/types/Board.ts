export interface Board {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  lists: ListID[];
}

export type ListID = string;
