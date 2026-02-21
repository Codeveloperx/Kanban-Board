import { ListContainer } from "../../components/list/ListContainer";
import { useLoaderData } from "react-router-dom";
import Breadcrumb from "@/shared/ui/breadcrumb/BreadCrumb";
import templatePath from "./breadCrumb.json";

import type { Board } from "../../types/Board";

const BoardDetailPage = () => {
  const board = useLoaderData() as Board;

  return (
    <div className="h-full flex flex-col">
      <Breadcrumb
        template={templatePath}
        params={{ id: board.id, name: board.name }}
      />
      <div className="shrink-0 mb-4">
        <h1 className="text-2xl font-bold px-6">{board.name}</h1>
      </div>
      <section className="flex-1 min-h-0 px-6 py-4 overflow-auto">
        <ListContainer boardId={board.id} />
      </section>
    </div>
  );
};

export default BoardDetailPage;
