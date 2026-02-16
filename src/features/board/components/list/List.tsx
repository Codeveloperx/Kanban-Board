import { Button } from "@/shared/ui/button";
import { getTaskByListId } from "../../utils/getTaskByListId";
import { GripVertical } from "lucide-react";
import { ListHeader } from "./ListHeader";
import { useTask } from "../../hooks/task";

import type { List as ListType } from "@/features/board/types/List";

interface ListProps {
  list: ListType;
}

export const List = (props: ListProps) => {
  const { state } = useTask();
  const tasks = getTaskByListId(state.tasks, props.list.id);

  return (
    <div className="w-64 p-4 flex-none bg-gray-100 rounded-lg overflow-hidden transition-all duration-200 shadow-md flex flex-col max-h-full">
      <ListHeader
        title={props.list.title}
        amountTask={tasks.length}
        color={props.list.color}
        icon={GripVertical}
      />

      <div className="p-4 border-2 border-amber-600 w-auto">
        <div>Content</div>
      </div>

      <Button variant="add" className="w-full mt-2" onClick={() => {}}>
        Agregar tarea
      </Button>
    </div>
  );
};
