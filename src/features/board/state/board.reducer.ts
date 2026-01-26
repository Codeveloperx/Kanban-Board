import { createList } from "../utils/initialList";
import { formatDate } from "@/shared/utils";
import { ActionBoard, type BoardAction, type BoardState } from "./board.type";

const date = new Date();

export const boardReducer = (
  state: BoardState,
  action: BoardAction,
): BoardState => {
  switch (action.type) {
    case ActionBoard.CREATE: {
      const newBoard = {
        ...action.payload,
        createdAt: formatDate(date),
        updatedAt: "",
        list: createList(),
      };

      return {
        boards: [...state.boards, newBoard],
      };
    }

    case ActionBoard.UPDATE: {
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

    case ActionBoard.DELETE: {
      const updatedBoards = state.boards.map((board) =>
        board.id === action.payload
          ? { ...board, active: false, updatedAt: formatDate(date) }
          : board,
      );

      return {
        ...state,
        boards: updatedBoards,
      };
    }

    default:
      return state;
  }
};
