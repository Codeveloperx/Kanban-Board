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
        updatedAt: formatDate(date),
        list: createList(),
      };

      return {
        boards: [...state.boards, newBoard],
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
