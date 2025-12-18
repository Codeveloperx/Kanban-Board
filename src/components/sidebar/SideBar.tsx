import { navigationItems } from "./navigationItems";
import { PanelLeft, Settings } from "lucide-react";
import { useOpen } from "../../hooks/useOpen";
import Logo from "../../assets/kanbanBoard_dark.svg";
import NavItem from "./NavItem";

const Sidebar = () => {
  const { isOpen, onToggle } = useOpen();

  return (
    <aside
      className={`
        ${isOpen ? "w-64" : "w-16"} 
        bg-gray-900 text-white 
        transition-all duration-300 ease-in-out
        flex flex-col
        overflow-hidden
      `}
    >
      <div className="p-4">
        <button
          type="button"
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors w-full flex items-center justify-start group cursor-e-resize"
        >
          {isOpen ? (
            <>
              <img src={Logo} alt="Kanban Board" className="w-8 h-8" />
              <span className="ml-3 text-base font-semibold tracking-tight whitespace-nowrap">
                Kanban Board
              </span>
            </>
          ) : (
            <PanelLeft className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          )}
        </button>
      </div>

      <nav className="flex-1 px-3 py-2">
        <div className="flex flex-col gap-1">
          {navigationItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.label}
              isOpen={isOpen}
              path={item.path}
            />
          ))}
        </div>
      </nav>

      <div className="p-3 border-t border-gray-800">
        <NavItem
          icon={Settings}
          label="Settings"
          isOpen={isOpen}
          path="/setting"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
