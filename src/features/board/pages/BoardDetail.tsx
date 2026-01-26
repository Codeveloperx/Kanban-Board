import { useLoaderData } from "react-router-dom";

import { Pencil } from "lucide-react";
import type { Board } from "../types/Board";
import Breadcrumb from "@/shared/ui/breadcrumb/BreadCrumb";

const breadcrumbsTemplate = [
  { name: "Boards", path: "/boards" },
  { name: "{boardName}", path: "/boards/{boardId}" },
];

const BoardDetail = () => {
  const board = useLoaderData() as Board;

  const replacePlaceholders = (
    template: string,
    values: Record<string, string>,
  ) => {
    let result = template;
    for (const key in values) {
      result = result.replace(`{${key}}`, values[key]);
    }
    return result;
  };

  const items = breadcrumbsTemplate.map(({ name, path }) => ({
    name: replacePlaceholders(name, { boardName: board.name }),
    path: replacePlaceholders(path, { boardId: board.id }),
  }));

  return (
    <div>
      <Breadcrumb items={items} />
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
