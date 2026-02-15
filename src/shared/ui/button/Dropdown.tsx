import { MoreHorizontal } from "lucide-react";
import { useRef, useEffect } from "react";

import type { Actions } from "@/features/board/types/Actions";
import { useOpen } from "@/shared/hooks";

interface DropdownProps {
  actions: Actions[];
}

export const Dropdown = ({ actions }: DropdownProps) => {
  const { isOpen, onClose, onToggle } = useOpen();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    onToggle();
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="absolute -top-4 -right-2 text-gray-500 hover:text-gray-900 bg-white border-transparent hover:bg-gray-100 rounded-lg p-1.5  transition-colors cursor-pointer"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="sr-only">Open dropdown</span>
        <MoreHorizontal className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-2 right-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-36"
        >
          <ul className="p-2 text-sm text-gray-700 font-medium">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      action.onAction();
                      onClose();
                    }}
                    className={`inline-flex gap-2 items-center w-full p-2 hover:bg-gray-100 rounded-md text-left transition-colors cursor-pointer ${
                      action.isDanger ? "text-red-600" : "hover:text-gray-900"
                    }`}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {action.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
