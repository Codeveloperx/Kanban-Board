import type { List } from "../../types/List";

export interface ListState {
  list: List[];
}

export const LIST_ACTIONS = {
  CREATE: "CREATE_LIST",
  UPDATE: "UPDATE_LIST",
  DELETE: "DELETE_LIST",
} as const;

export type ListAction =
  | { type: typeof LIST_ACTIONS.CREATE; payload: List }
  | { type: typeof LIST_ACTIONS.UPDATE; payload: List }
  | { type: typeof LIST_ACTIONS.DELETE; payload: string };

export const initialListState: ListState = {
  list: [],
};
