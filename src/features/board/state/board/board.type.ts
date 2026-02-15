import type { Board, CreateData, UpdatedData } from "../../types/Board";

export interface BoardState {
  boards: Board[];
}

export const BOARD_ACTIONS = {
  CREATE: "CREATE_BOARD",
  UPDATE: "UPDATE_BOARD",
  DELETE: "DELETE_BOARD",
  FAVORITE: "FAVORITE_BOARD",
} as const;

export type BoardAction =
  | { type: typeof BOARD_ACTIONS.CREATE; payload: CreateData }
  | { type: typeof BOARD_ACTIONS.UPDATE; payload: UpdatedData }
  | { type: typeof BOARD_ACTIONS.DELETE; payload: string }
  | { type: typeof BOARD_ACTIONS.FAVORITE; payload: string }

export const initialBoardState: BoardState = {
  boards: [],
};
