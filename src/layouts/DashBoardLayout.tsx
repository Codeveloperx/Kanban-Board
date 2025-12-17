import { BarChart3, Home, List, Settings } from "lucide-react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../assets/kanbanBoard_dark.svg";

const DashBoardLayout = () => {
  return (
    <div className="flex h-screen border-2">
      {/* SideBar */}
      <aside className="flex flex-col items-center w-16 bg-gray-800 text-white px-4 py-2">
        <img src={Logo} alt="Kanban Board" className="w-8 h-8" />
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

      <div className="flex flex-col flex-1">
        <Header />
        <main className="h-full p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
