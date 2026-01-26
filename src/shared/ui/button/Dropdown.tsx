import { MoreVertical } from "lucide-react";
import { useOpen } from "@/shared/hooks/useOpen";
import { useState, useRef, useEffect } from "react";

import type { Actions } from "@/features/board/types/Board";

interface DropdownProps {
  options: Actions[];
}

export const Dropdown = ({ options }: DropdownProps) => {
  const { isOpen, onClose, onToggle } = useOpen(false);
  const [openUpward, setOpenUpward] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const MENU_HEIGHT = options.length * 44;

    setOpenUpward(spaceBelow < MENU_HEIGHT);
  }, [isOpen, options.length]);

  return (
    <div ref={menuRef} className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={() => onToggle()}
        className="px-2 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className={`
            absolute right-0 z-50 w-40 rounded-lg border border-gray-300 bg-white py-1 shadow-lg
            ${openUpward ? "bottom-full mb-1" : "top-full mt-1"}
          `}
          role="menu"
        >
          {options.map((opt) => {
            const Icon = opt.icon;

            return (
              <button
                key={opt.name}
                onClick={() => {
                  opt.onAction();
                  onClose();
                }}
                role="menuitem"
                className={`
                  flex w-full items-center gap-2 px-4 py-2 text-left text-sm
                  ${
                    opt.type === "Delete"
                      ? "text-red-600 hover:bg-red-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {Icon && <Icon className="h-5 w-5" />}
                {opt.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
