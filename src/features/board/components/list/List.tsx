import { Button } from "@/shared/ui/button";
import { getTaskByListId } from "../../utils/getTaskByListId";
import { GripVertical} from "lucide-react";
import { ListHeader } from "./ListHeader";
import { useTask } from "../../hooks/task";

import type { Actions } from "../../types/Actions";
import type { List as ListType } from "@/features/board/types/List";

interface ListProps {
  list: ListType;
  actions?: Actions[];
}

export const List = ({ list, actions = [] }: ListProps) => {
  const { state } = useTask();

  const tasks = getTaskByListId(state.tasks, list.id);
  return (
    <div className="p-4 bg-gray-100">
      <ListHeader
        options={actions}
        color={list.color}
        title={list.title}
        amountTask={tasks.length}
        icon={GripVertical}
      />
      <div className="p-4">Content</div>
      <div className="p-4">Content</div>
      <div className="p-4">Content</div>
      <Button variant="add" className="w-full mt-2">
        Agregar tarea
      </Button>
    </div>
  );
};
