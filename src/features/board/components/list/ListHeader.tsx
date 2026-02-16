import ListOptions from "./ListOptions";
import type { LucideIcon } from "lucide-react";

interface PropsTypes {
  title: string;
  amountTask?: number;
  color: string | undefined;
  icon: LucideIcon;
  options?: string[];
}

export const ListHeader = ({
  title,
  amountTask = 0,
  color,
  icon: Icon,
}: PropsTypes) => {
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
              title={title}
            >
              {title}
            </h2>
            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full shrink-0">
              {amountTask}
            </span>
          </div>
          <ListOptions isCollapsed onCollapsed={() => {}} />
        </div>
      </div>
      <div
        style={{ borderColor: color }}
        className="border-b-2 mt-2 mb-4"
      ></div>
    </section>
  );
};
