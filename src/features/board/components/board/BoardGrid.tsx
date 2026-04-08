import { Card } from "./Card";
import { EmptyBoard } from "./EmptyBoard";
import { ROUTES } from "@/app/router/routes";
import { useNavigation } from "@/shared/hooks";

import type { Board as BoardType } from "../../types/Board";

interface BoardProps {
  boards: BoardType[];
}

const BoardGrid = ({ boards }: BoardProps) => {
  const { goTo } = useNavigation();

  const onCreateBoard = () => goTo(ROUTES.NEW_BOARD);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,260px))] gap-4">
      {boards.map((board) => (
        <Card key={board.id} board={board} />
      ))}

      {boards.length === 0 && (
        <EmptyBoard title="New board" onClick={onCreateBoard} />
      )}
    </div>
  );
};

export default BoardGrid;
