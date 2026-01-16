import type { List } from "./List";

export interface Board {
  id: string;
  name: string;
  color: string;
  createdAt?: string;
  updatedAt?: string;
  list?: List[];
  active: Boolean;
}

export type ListID = string;
