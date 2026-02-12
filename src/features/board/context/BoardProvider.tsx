import { AppContext } from "./AppContext";
import { useBoardReducer } from "../hooks/board";
import { useListReducer } from "../hooks/list";
import { useTaskReducer } from "../hooks/task";

interface BoardProviderProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const { boards, dispatchBoards } = useBoardReducer();
  const { lists, dispatchLists } = useListReducer();
  const { tasks, dispatchTasks } = useTaskReducer();

  return (
    <AppContext.Provider
      value={{
        boards,
        dispatchBoards,
        lists,
        dispatchLists,
        tasks,
        dispatchTasks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
