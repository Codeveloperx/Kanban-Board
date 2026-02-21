import { Shrink, Maximize2 } from "lucide-react";
import type { Actions } from "../../types/Actions";
import { Dropdown } from "@/shared/ui/button";

type PropsType = {
  onCollapsed?: () => void;
  isCollapsed?: boolean;
  actions: Actions[];
};

const ListOptions = ({
  isCollapsed = false,
  onCollapsed,
  actions,
}: PropsType) => {
  return (
    <div className="flex items-center gap-7">
      <button
        className="bg-gray-100 hover:bg-white cursor-pointer p-1.5 rounded-lg border-transparent transition-colors text-gray-500 hover:text-gray-600"
        onClick={onCollapsed}
        title="Contraer columnas"
      >
        {!isCollapsed ? (
          <Shrink className="h-4 w-4" />
        ) : (
          <Maximize2 className="h-4 w-4" />
        )}
      </button>

      {actions.length > 0 && <Dropdown actions={actions} isList />}
    </div>
  );
};

export default ListOptions;
