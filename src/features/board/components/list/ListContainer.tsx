import { ListExpand } from "./ListExpand";
import { useEditList } from "../../hooks/list/useEditList";
import { useListActions } from "../../hooks/list";
import { useOpen } from "@/shared/hooks";
import ListCollapsed from "./ListCollapsed";

import type { List } from "../../types/List";

interface ListContainerProps {
  list: List;
}

export const ListContainer = ({ list }: ListContainerProps) => {
  const { isOpen, onToggle } = useOpen(list.collapsed || false);
  const { collapsedList } = useListActions();
  const { editingListId, startEditing, stopEditing } = useEditList();

  const handleToggle = () => {
    collapsedList(list.id);
    onToggle();
  };

  const containerClasses = isOpen ? "w-14 max-h-60" : "w-64 max-h-[90vh]";
  const expandedClasses = isOpen
    ? "opacity-0 pointer-events-none h-0 overflow-hidden"
    : "opacity-100";
  const collapsedClasses = isOpen
    ? "opacity-100 h-60"
    : "opacity-0 pointer-events-none h-0 overflow-hidden";

  return (
    <div
      style={{ backgroundColor: isOpen ? list.color : "transparent" }}
      className={`
        flex flex-col rounded-lg overflow-hidden shadow-md
        transition-[width,max-height] duration-300 ease-in-out
        ${containerClasses}
      `}
    >
      <div
        className={`transition-opacity duration-200 ease-in-out ${expandedClasses}`}
      >
        <ListExpand
          onCollapsed={handleToggle}
          list={list}
          isEditing={editingListId === list.id}
          onEdit={startEditing}
          onClose={stopEditing}
        />
      </div>

      <div
        className={`transition-opacity duration-200 ease-in-out ${collapsedClasses}`}
      >
        <ListCollapsed
          values={list}
          onExpand={handleToggle}
          isCollapsed={isOpen}
        />
      </div>
    </div>
  );
};
