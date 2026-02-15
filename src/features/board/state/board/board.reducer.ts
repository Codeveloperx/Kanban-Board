import { formatDate } from "@/shared/utils";
import { createBaseEntity } from "../../utils/createBaseEntity";

import { BOARD_ACTIONS, type BoardAction, type BoardState } from "./board.type";

const date = new Date();

export const boardReducer = (
  state: BoardState,
  action: BoardAction,
): BoardState => {
  switch (action.type) {
    case BOARD_ACTIONS.CREATE: {
      const newBoard = { ...createBaseEntity(), ...action.payload };
      return {
        boards: [...state.boards, newBoard],
      };
    }

    case BOARD_ACTIONS.UPDATE: {
      const updatesBoard = state.boards.map((board) =>
        board.id === action.payload.id
          ? {
              ...board,
              ...action.payload,
              updatedAt: formatDate(date),
            }
          : board,
      );

      return { boards: updatesBoard };
    }

    case BOARD_ACTIONS.DELETE: {
      const boards = state.boards.map((board) =>
        board.id === action.payload
          ? { ...board, active: false, updatedAt: formatDate(date) }
          : board,
      );

      return { ...state, boards };
    }

    case BOARD_ACTIONS.FAVORITE: {
      const boards = state.boards.map((board) =>
        board.id === action.payload
          ? { ...board, isFavorite: true, updatedAt: formatDate(date) }
          : board,
      );

      return { ...state, boards };
    }

    default:
      return state;
  }
};
