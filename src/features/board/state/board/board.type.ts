import {
  KEY_CREATE_BOARD,
  KEY_DELETE_BOARD,
  KEY_UPDATE_BOARD,
} from "@/shared/constants/Constants";

import type { Board } from "../../types/Board";

export interface BoardState {
  boards: Board[];
}

export const ActionBoard = {
  CREATE: KEY_CREATE_BOARD,
  DELETE: KEY_DELETE_BOARD,
  UPDATE: KEY_UPDATE_BOARD,
} as const;

export type ActionBoard = (typeof ActionBoard)[keyof typeof ActionBoard];

//prettier-ignore
export type BoardAction =
  | { type: typeof ActionBoard.CREATE; payload: Board }
  | { type: typeof ActionBoard.UPDATE; payload: Board }
  | { type: typeof ActionBoard.DELETE; payload: string}

export const initialBoardState: BoardState = {
  boards: [],
};
