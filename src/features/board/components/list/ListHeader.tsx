import type { LucideIcon } from "lucide-react";

import type { List } from "../../types/List";
import ListOptions from "./ListOptions";

interface PropsTypes {
  list: List;
  icon: LucideIcon;
  options?: string[];
}

export const ListHeader = ({ list, icon: Icon }: PropsTypes) => {
  return (
    <section>
      <div className=" header flex items-center gap-1 justify-between">
        <div
          className={`
            cursor-grab active:cursor-grabbing
            text-gray-400 hover:text-gray-600
            transition-colors
          `}
        >
          <Icon />
        </div>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <h2
              className="text-sm font-semibold text-gray-700 uppercase wrap-break-word truncate min-w-0"
              title={list.title}
            >
              {list.title}
            </h2>
            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full shrink-0">
              {list.tasks?.length}
            </span>
          </div>
          <ListOptions isCollapsed onCollapsed={() => {}} />
        </div>
      </div>
      <div
        style={{ borderColor: list.color }}
        className="border-b-2 mt-2 mb-4"
      ></div>
    </section>
  );
};
