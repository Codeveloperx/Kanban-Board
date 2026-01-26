import type { Board } from "../types/Board";
import { Badge } from "./Badge";

interface PropsType {
  board: Board;
}

export const CardContent = ({ board }: PropsType) => {
  const lastUpdated = board.updatedAt
    ? `Updated ${board.updatedAt}`
    : `Created ${board.createdAt}`;

  return (
    <div>
      <div className="text-[13px] text-neutral-500 font-medium mb-1">
        {lastUpdated}
      </div>
      <h2 className="text-2xl font-bold text-zinc-900 mb-3.5 leading-tight truncate">
        {board.name}
      </h2>
      {board.tags && board.tags.length > 0 && <Badge tags={board.tags} />}
    </div>
  );
};
