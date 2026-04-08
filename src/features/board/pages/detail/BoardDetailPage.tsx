import { useLoaderData } from "react-router-dom";
import Breadcrumb from "@/shared/ui/breadcrumb/BreadCrumb";
import ListWrapper from "../../components/list/ListWrapper";
import templatePath from "./breadCrumb.json";

import type { Board } from "../../types/Board";

const BoardDetailPage = () => {
  const board = useLoaderData() as Board;

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <Breadcrumb
        template={templatePath}
        params={{ id: board.id, name: board.name }}
      />

      <div className="shrink-0 mb-4 px-6">
        <h1 className="text-2xl font-bold">{board.name}</h1>
      </div>

      <section className="flex-1 min-h-0">
        <ListWrapper boardId={board.id} />
      </section>
    </div>
  );
};

export default BoardDetailPage;
