import { BarChart3, Home, List, Plus, Settings } from "lucide-react";
import { Outlet } from "react-router-dom";
import logoDark from "../assets/kanbanBoard_dark.svg";

const DashBoardLayout = () => {
  return (
    <div className="flex h-screen border-2">
      {/* SideBar */}
      <aside className="flex flex-col items-center w-16 bg-gray-800 text-white px-4 py-2">
        <img src={logoDark} alt="Kanban Board" className="w-8 h-8" />
        <nav className="flex flex-col flex-1 justify-between items-center py-4 space-y-6">
          <div className="flex flex-col gap-6">
            <button className="p-2 rounded hover:bg-gray-100">
              <Home className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <List className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100">
              <BarChart3 className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div>
            <button className="p-2 rounded hover:bg-gray-100 mt-auto">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </nav>
      </aside>

      {/* Header */}
      <div className="flex flex-col flex-1">
        <header className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold text-gray-900">
              Kanban Board
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center space-x-1 cursor-pointer bg-indigo-600 text-white px-3 py-1 rounded shadow hover:bg-indigo-700">
              <Plus className="w-4 h-4" />
              <span className="text-sm">New Board</span>
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              <img
                src="https://i.pravatar.cc/40"
                alt="User Avatar"
                className="w-8 h-8 rounded-full border"
              />
            </div>
          </div>
        </header>
        <main className="h-full p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
