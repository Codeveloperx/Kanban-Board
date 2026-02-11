import { AppContext } from "./AppContext";
import { useBoardReducer } from "../hooks/board";
import { useListReducer } from "../hooks/list";

interface BoardProviderProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const { boards, dispatchBoards } = useBoardReducer();
  const { list, dispatchLists } = useListReducer();

  return (
    <AppContext.Provider
      value={{ boards, dispatchBoards, list, dispatchLists }}
    >
      {children}
    </AppContext.Provider>
  );
};
