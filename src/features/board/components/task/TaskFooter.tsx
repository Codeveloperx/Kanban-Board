import { CalendarDays } from "lucide-react";

export type Priority = "Low" | "Medium" | "High" | "No priority";

type Props = {
  priority: Priority;
  date: string;
};

export const TaskFooter = ({ priority = "No priority", date }: Props) => (
  <div className="flex items-center justify-between mt-4">
    <div className="flex items-center gap-2">
      <CalendarDays className="w-5 h-5 text-gray-500" />
      <span className="text-xs text-gray-500 font-semibold">{date}</span>
    </div>
    <span
      className={`inline-block text-xs font-semibold px-2 py-1 rounded-md ${priority}`}
    >
      {priority}
    </span>
  </div>
);
