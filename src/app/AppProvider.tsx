import { BoardProvider } from "@/features/board/context/BoardProvider";

interface ProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: ProviderProps) => {
  return <BoardProvider>{children}</BoardProvider>;
};
