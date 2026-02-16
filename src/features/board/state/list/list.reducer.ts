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
    default:
      return state;
  }
};
