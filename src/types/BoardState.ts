import {
  KEY_CREATE_BOARD,
  KEY_DELETE_BOARD,
  KEY_SELECT_BOARD,
  KEY_UPDATE_BOARD,
} from "../constants/Constants";
import type { Board } from "./Board";

export interface BoardState {
  boards: Board[];
}

export const ActionBoard = {
  CREATE: KEY_CREATE_BOARD,
  DELETE: KEY_DELETE_BOARD,
  UPDATE: KEY_UPDATE_BOARD,
  SELECT: KEY_SELECT_BOARD,
} as const;

export type ActionBoard = (typeof ActionBoard)[keyof typeof ActionBoard];

//prettier-ignore
export type BoardAction =
  | { type: typeof ActionBoard.CREATE; payload: { title: string; description?: string }}
  | { type: typeof ActionBoard.UPDATE; payload: { id: string; title?: string; description?: string }}
  | { type: typeof ActionBoard.DELETE; payload: { id: string }}
  | { type: typeof ActionBoard.SELECT; payload: { id: string | null }};

export const initialBoardState: BoardState = {
  boards: [],
};
