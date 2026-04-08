import type { CreateData, List, UpdatedData } from "../../types/List";

export interface ListState {
  lists: List[];
}

export const LIST_ACTIONS = {
  CREATE: "CREATE_LIST",
  UPDATE: "UPDATE_LIST",
  DELETE: "DELETE_LIST",
  COLLAPSED: "COLLAPSE_LIST",
} as const;

export type ListAction =
  | { type: typeof LIST_ACTIONS.CREATE; payload: CreateData }
  | { type: typeof LIST_ACTIONS.UPDATE; payload: UpdatedData }
  | { type: typeof LIST_ACTIONS.DELETE; payload: string }
  | { type: typeof LIST_ACTIONS.COLLAPSED; payload: string };

export const initialListState: ListState = {
  lists: [],
};
