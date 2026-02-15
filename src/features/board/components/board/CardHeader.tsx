import { Bookmark, BookMarked } from "lucide-react";
import { Dropdown } from "@/shared/ui/button/Dropdown";
import { useOpen } from "@/shared/hooks";

import type { Actions } from "../../types/Actions";

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
      <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-md bg-zinc-900 text-white group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-300">
        {props.initials}
      </div>

      <div className="flex items-center gap-8">
        <button
          onClick={handleSave}
          className={`bg-white rounded-lg text-sm font-medium transition-all duration-200 p-2 cursor-pointer ${
            isSaved
              ? "bg-orange-50"
              : "text-neutral-500 hover:bg-neutral-100 hover:text-zinc-900"
          }`}
        >
          {isSaved ? (
            <BookMarked className="h-4 w-4" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </button>
        {actions.length > 0 && <Dropdown actions={actions} />}
      </div>
    </div>
  );
};
