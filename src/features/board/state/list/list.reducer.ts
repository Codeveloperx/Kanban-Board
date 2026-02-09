import { ActionList, type ListAction, type ListsState } from "./list.type";

export const listReducer = (
  state: ListsState,
  action: ListAction,
): ListsState => {
  switch (action.type) {
    case ActionList.CREATE:
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    default:
      return state;
  }
};
