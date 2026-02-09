import { ListHeader } from "./ListHeader";
import { GripVertical } from "lucide-react";

import type { List as ListType } from "@/features/board/types/List";
import { Button } from "@/shared/ui/button";

interface ListProps {
  list: ListType;
}

export const List = (props: ListProps) => {
  return (
    <div className="w-64 p-4 flex-none bg-gray-100 rounded-lg overflow-hidden transition-all duration-200 shadow-md flex flex-col max-h-full">
      <ListHeader list={props.list} icon={GripVertical} />

      <Button variant="add" className="w-full mt-2" onClick={() => {}}>
        Agregar tarea
      </Button>

      <div className="p-4 border-2 border-amber-600 w-auto">
        <div>Content</div>
      </div>
    </div>
  );
};
