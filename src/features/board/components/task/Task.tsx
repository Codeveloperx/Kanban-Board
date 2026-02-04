import { TaskActions } from "./TaskActions";
import { TaskFooter } from "./TaskFooter";
import { TaskHeader } from "./TaskHeader";

export const Task = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 group">
      {/* Heder */}
      <TaskHeader task="Nueva tarea" checked={false} onToggle={() => {}} />
      {/* Description */}
      <h3 className="text-sm text-gray-400 mt-1 overflow-hidden text-ellipsis line-clamp-2">
        description
      </h3>

      {true && <TaskActions visible={true} onEdit={() => {}} />}

      <TaskFooter date="21 feb" priority="No priority" />
    </div>
  );
};
