import { useTask } from "../../hooks/task";
import ListOptions from "./ListOptions";

import type { List } from "../../types/List";

type PropsTypes = {
  values: List;
  onExpand: () => void;
  isCollapsed: boolean;
};

const ListCollapsed = (props: PropsTypes) => {
  const { state } = useTask();
  return (
    <div className="flex-1 h-full w-full fade-in">
      <div className="flex flex-col items-center p-4 h-full">
        <div className="flex flex-col items-center justify-between h-full">
          <div>
            <ListOptions
              actions={[]}
              isCollapsed
              onCollapsed={props.onExpand}
            />
          </div>

          <div className="flex justify-center">
            <span
              className="
            [writing-mode:vertical-rl]
            max-h-[120px]
            overflow-hidden
          text-center wrap-break-word truncate min-w-0
          "
            >
              {props.values.title}
            </span>
          </div>

          <span className="text-center text-xs font-bold bg-gray-200 text-gray-600 px-2 py-1 rounded-full shrink-0">
            {state.tasks.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListCollapsed;
