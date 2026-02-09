import {
  KEY_CREATE_LIST,
  KEY_DELETE_LIST,
  KEY_UPDATE_LIST,
} from "@/shared/constants/Constants";

import type { List } from "../../types/List";

export interface ListsState {
  lists: List[];
}

export const ActionList = {
  CREATE: KEY_CREATE_LIST,
  DELETE: KEY_UPDATE_LIST,
  UPDATE: KEY_DELETE_LIST,
} as const;

export type ActionList = (typeof ActionList)[keyof typeof ActionList];

//prettier-ignore
export type ListAction =
  | { type: typeof ActionList.CREATE; payload: List }
  | { type: typeof ActionList.UPDATE; payload: List }
  | { type: typeof ActionList.DELETE; payload: string}

export const initialListState: ListsState = {
  lists: [],
};
