import { Card } from "./Card";
import { EmptyBoard } from "./EmptyBoard";
import { ROUTES } from "@/app/router/routes";
import { useNavigation } from "@/shared/hooks";

import type { Board as BoardType } from "../../types/Board";

interface BoardProps {
  boards: BoardType[];
}

const BoardGrid = (props: BoardProps) => {
  const { goTo } = useNavigation();

  const onCreateBoard = () => goTo(ROUTES.NEW_BOARD);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,260px))] gap-4">
      {props.boards
        .filter((it) => it.active)
        .map((board) => (
          <Card key={board.id} board={board} />
        ))}

      {props.boards.length === 0 && (
        <EmptyBoard title="New board" onClick={onCreateBoard} />
      )}
    </div>
  );
};

export default BoardGrid;
