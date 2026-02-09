import { useBoardReducer } from "../hooks/useBoardReducer";
import { AppContext } from "./AppContext";
// import { BoardContext } from "./BoardContext";
import { useListReducer } from "../hooks/useListReducer";

interface BoardProviderProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const { state: boards, dispatch: dispatchBoards } = useBoardReducer();
  const { state: lists, dispatch: dispatchLists } = useListReducer();

  return (
    <AppContext
      value={{
        boards,
        dispatchBoards,
        lists,
        dispatchLists,
      }}
    >
      {children}
    </AppContext>
  );
  // return <BoardContext value={{ state, dispatch }}>{children}</BoardContext>;
};
