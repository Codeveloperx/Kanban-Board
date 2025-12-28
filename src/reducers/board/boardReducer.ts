import { UUID } from "../../utils/uuid";
import type { Board } from "../../types/Board";
import type { List } from "../../types/List";
import {
  ActionBoard,
  type BoardAction,
  type BoardState,
} from "../../types/BoardState";
import { formatDate } from "../../utils/formatDate";
import { COLORS } from "../../utils/color";

const date = new Date();

export const boardReducer = (
  state: BoardState,
  action: BoardAction
): BoardState => {
  switch (action.type) {
    case ActionBoard.CREATE: {
      const newBoard: Board = {
        id: UUID(),
        name: action.payload.title,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
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
