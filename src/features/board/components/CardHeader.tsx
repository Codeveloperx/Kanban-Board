import { Bookmark, BookMarked } from "lucide-react";
import { useOpen } from "@/shared/hooks/useOpen";
import { Dropdown } from "@/shared/ui/button";

import type { Actions } from "../types/Board";

interface PropsTypes {
  initials: string;
  onSave: () => void;
  actions?: Actions[];
}

export const CardHeader = (props: PropsTypes) => {
  const { actions = [] } = props;
  const { onToggle, isOpen: isSaved } = useOpen(false);

  const handleSave = () => {
    onToggle();
    props.onSave();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="w-[52px] h-[52px] bg-zinc-900 text-white rounded-[14px] flex items-center justify-center font-bold text-lg tracking-wide shadow-md group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-300">
        {props.initials}
      </div>

      <div className="flex items-center gap-0.5">
        <button
          onClick={handleSave}
          className={`px-2 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            isSaved
              ? "bg-orange-50"
              : "text-neutral-500 hover:bg-neutral-100 hover:text-zinc-900"
          }`}
        >
          {isSaved ? (
            <BookMarked className="h-4 w-4" />
          ) : (
            <Bookmark className="h-4 w-4 text-zinc-800" />
          )}
        </button>
        {actions.length > 0 && <Dropdown options={actions} />}
      </div>
    </div>
  );
};
