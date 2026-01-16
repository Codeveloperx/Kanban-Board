import { getBoardId } from "@/utils";

import type { LoaderFunctionArgs } from "react-router-dom";

export const boardDetailLoader = ({ params }: LoaderFunctionArgs) => {
  const boardId = params.id;

  if (!boardId) {
    throw new Error("Board id missing");
  }

  const board = getBoardId(boardId);

  if (!board) {
    throw new Error("Board not found");
  }

  return board;
};
