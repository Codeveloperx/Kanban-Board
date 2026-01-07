import { Bookmark } from "lucide-react";

import type { Board } from "../../../types/Board";

interface CardProps {
  board?: Board;
}

const CardItem = (props: CardProps) => {
  return (
    <div
      style={{ backgroundColor: props.board?.color }}
      className="flex flex-col gap-4 px-4 py-4 rounded-xl"
    >
      <div className="flex flex-1 justify-between items-center">
        <div className="flex justify-center items-center rounded-full bg-white px-4 py-2">
          <span className="text-xs font-medium text-gray-800">
            {props.board?.createdAt}
          </span>
        </div>
        <div className="flex w-8 h-8 justify-center items-center rounded-full bg-white">
          <Bookmark className="w-4 h-4" />
        </div>
      </div>

      <h1 className="text-lg font-bold truncate ">{props.board?.name}</h1>
    </div>
  );
};

export default CardItem;
