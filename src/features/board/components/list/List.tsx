import { GripVertical } from "lucide-react";
import { ListHeader } from "./ListHeader";
import { Task } from "../task/Task";
import CreateTask from "../task/CreateTask";

import type { List as ListType } from "@/features/board/types/List";

interface ListProps {
  list: ListType;
}

export const List = (props: ListProps) => {
  return (
    <div className="w-64 p-4 flex-none bg-gray-100 rounded-lg overflow-hidden transition-all duration-200 shadow-md flex flex-col max-h-full">
      <ListHeader list={props.list} icon={GripVertical} />

      <CreateTask />

      <div className="flex flex-col gap-4 overflow-y-auto flex-1">
        {props.list.tasks.map((task) => (
          <Task key={task.id} />
        ))}
      </div>
    </div>
  );
};
