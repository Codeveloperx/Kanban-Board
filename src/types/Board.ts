import type { List } from "./List";

export interface Board {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  list: List[];
  // lists: ListID[];
}

export type ListID = string;
