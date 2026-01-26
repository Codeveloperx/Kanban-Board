import { Plus } from "lucide-react";

interface HeaderProps {
  showAction?: boolean;
  onActionClick?: () => void;
}

export const Header = ({ showAction = false, onActionClick }: HeaderProps) => {
  return (
    <header className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <span className="text-xl font-bold text-gray-900">Kanban Board</span>
      </div>
      <div className="flex items-center gap-4">
        {showAction && (
          <button
            className="flex items-center space-x-1 cursor-pointer bg-gray-700 text-white px-3 py-1 rounded shadow hover:bg-gray-800"
            onClick={onActionClick}
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm">New Board</span>
          </button>
        )}
        <div className="w-8 h-8 bg-gray-300 rounded-full">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </header>
  );
};
