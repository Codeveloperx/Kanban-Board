import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isOpen: boolean;
  path: string;
  onClick?: () => void;
}

const NavItem = (props: NavItemProps) => {
  const { icon: Icon, label, isOpen, path, onClick } = props;

  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `p-3 rounded-lg flex items-center w-full group transition-colors
        ${
          isActive
            ? "bg-gray-800 text-white"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }
      `
      }
    >
      <Icon className={`w-5 h-5 transition-colors ${isOpen ? "mr-3" : ""}`} />

      {isOpen && (
        <span className="text-sm whitespace-nowrap transition-opacity duration-200">
          {label}
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;
