import { useLoaderData } from "react-router-dom";

import type { Board } from "@/types";
import { Pencil } from "lucide-react";

const BoardDetail = () => {
  const board = useLoaderData() as Board;
  return (
    <div>
      <div className="inline-flex group items-center gap-2">
        <h1 className="font-medium text-2xl">{board.name}</h1>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <Pencil className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto py-6 px-4">
        {board.list?.map((list) => (
          <div key={list.id}>
            <span>{list.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardDetail;
