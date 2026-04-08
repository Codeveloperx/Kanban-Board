import { Button } from "@/shared/ui/button";
import { GripVertical } from "lucide-react";
import { ListHeader } from "./ListHeader";

import type { Actions } from "../../types/Actions";
import type { List as ListType } from "@/features/board/types/List";
import { getTaskByListId } from "../../utils/filterData";

interface ListProps {
  list: ListType;
  actions?: Actions[];
  onCollapsed?: () => void;
}

export const List = ({ list, onCollapsed, actions = [] }: ListProps) => {
  const tasks = getTaskByListId(list.id);
  return (
    <div className="p-4 bg-gray-100">
      <ListHeader
        options={actions}
        color={list.color}
        title={list.title}
        amountTask={tasks.length}
        icon={GripVertical}
        onCollapsed={onCollapsed}
      />
      <article className="flex flex-col gap-2">
        <div className="p-4 bg-white rounded">Content</div>
        <div className="p-4 bg-white rounded">Content</div>
        <div className="p-4 bg-white rounded">Content</div>
        <div className="p-4 bg-white rounded">Content</div>
      </article>

      <Button variant="add" className="w-full mt-2">
        Agregar tarea
      </Button>
    </div>
  );
};
