import { createBaseEntity } from "../../utils/createBaseEntity";
import { LIST_ACTIONS, type ListAction, type ListState } from "./list.type";

export const listReducer = (
  state: ListState,
  action: ListAction,
): ListState => {
  switch (action.type) {
    case LIST_ACTIONS.CREATE: {
      const newList = {
        ...createBaseEntity(),
        ...action.payload,
        position: state.lists.length,
        collapsed: false,
      };

      return {
        ...state,
        lists: [...state.lists, newList],
      };
    }

    case LIST_ACTIONS.UPDATE: {
      const updatedList = state.lists.map((list) =>
        list.id === action.payload.id
          ? { ...list, ...action.payload, updatedAt: new Date().toISOString() }
          : list,
      );

      return {
        ...state,
        lists: updatedList,
      };
    }

    case LIST_ACTIONS.DELETE: {
      const updatedList = state.lists.map((list) =>
        list.id === action.payload
          ? {
            ...list,
            active: false,
              updatedAt: new Date().toISOString(),
            }
          : list,
      );

      return {
        ...state,
        lists: updatedList,
      };
    }

    case LIST_ACTIONS.COLLAPSED: {
      const updatedList = state.lists.map((list) =>
        list.id === action.payload
          ? { ...list, collapsed: !list.collapsed }
          : list,
      );

      return {
        ...state,
        lists: updatedList,
      };
    }

    default:
      return state;
  }
};
