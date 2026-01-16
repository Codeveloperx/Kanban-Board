import { formatDate, UUID } from "@/utils";

import {
  ActionBoard,
  type BoardAction,
  type BoardState,
  type List,
} from "@/types";

const date = new Date();

export const boardReducer = (
  state: BoardState,
  action: BoardAction
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
          : board
      );

      return { boards: updatesBoard };
    }

    case ActionBoard.DELETE: {
      const updatedBoards = state.boards.map((board) =>
        board.id === action.payload
          ? { ...board, active: false, updatedAt: formatDate(date) }
          : board
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

const createList = (): List[] => [
  {
    id: UUID(),
    title: "All",
    color: "#3b82f6",
    position: 0,
    collapsed: false,
    tasks: [],
  },
  {
    id: UUID(),
    title: "Pending",
    color: "#f59e0b",
    position: 1,
    collapsed: false,
    tasks: [],
  },
  {
    id: UUID(),
    title: "Done",
    color: "#10b981",
    position: 2,
    collapsed: false,
    tasks: [],
  },
];
