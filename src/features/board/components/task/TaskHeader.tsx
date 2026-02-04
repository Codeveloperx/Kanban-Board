type Props = {
  task: string;
  checked: boolean;
  onToggle: (checked: boolean) => void;
};

export const TaskHeader = ({ task, checked }: Props) => (
  <div className="flex items-center gap-2">
    <span
      className={`transition-opacity cursor-pointer ${
        checked ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    >
      ✅
    </span>
    <h3
      className={`text-sm font-semibold transition-all duration-300 wrap-break-word truncate ${
        checked ? "line-through text-gray-400" : ""
      } ${!checked ? "group-hover:ml-0 -ml-8" : ""}`}
    >
      {task}
    </h3>
  </div>
);
