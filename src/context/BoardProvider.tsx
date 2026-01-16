import { BoardContext } from "./BoardContext";
import { useBoardReducer } from "../hooks/useBoardReducer";

interface BoardProviderProps {
  children: React.ReactNode;
}

export const BoardProvider = ({ children }: BoardProviderProps) => {
  const { state, dispatch } = useBoardReducer();

  return <BoardContext value={{ state, dispatch }}>{children}</BoardContext>;
};
