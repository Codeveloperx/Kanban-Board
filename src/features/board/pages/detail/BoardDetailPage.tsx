import { List } from "../../components/list/List";
import { useLoaderData } from "react-router-dom";
import AddList from "../../components/list/AddList";
import Breadcrumb from "@/shared/ui/breadcrumb/BreadCrumb";
import templatePath from "./breadCrumb.json";

import type { Board } from "../../types/Board";
import { useLists } from "../../hooks/useList";

const BoardDetailPage = () => {
  const board = useLoaderData() as Board;
  const { state } = useLists();

  return (
    <div className="h-full flex flex-col">
      <Breadcrumb
        template={templatePath}
        params={{
          id: board.id,
          name: board.name,
        }}
      />
      <div className="shrink-0 mb-4">
        <h1 className="text-2xl font-bold px-6">{board.name}</h1>
      </div>

      <section className="flex-1 min-h-0 px-6 py-4 overflow-auto">
        <div className="flex gap-4 items-start">
          {state?.lists
            ?.filter((it) => it.boardId === board.id)
            ?.map((list) => (
              <List key={list.id} list={list} />
            ))}

          <AddList />
        </div>
      </section>
    </div>
  );
};

export default BoardDetailPage;
