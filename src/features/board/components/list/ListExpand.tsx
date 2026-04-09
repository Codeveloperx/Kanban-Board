import { List } from "./List";
import { ListForm } from "./ListForm";
import { SquarePen, Trash } from "lucide-react";
import { useCallback, useMemo } from "react";
import { useListActions } from "../../hooks/list";
import { KEY_MODE_EDIT } from "@/shared/constants/Constants";

import type { List as ListType } from "../../types/List";
import type { Actions } from "../../types/Actions";

interface ListItemProps {
  list: ListType;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onClose: () => void;
  onCollapsed: (id: string) => void;
}

export const ListExpand = ({
  list,
  isEditing,
  onEdit,
  onClose,
  onCollapsed,
}: ListItemProps) => {
  const { updateList, deleteList } = useListActions();

  const handleUpdate = useCallback(
    (values: ListType) => {
      updateList({ ...values });
    },

    [list.id, list.boardId, updateList],
  );

  const actions: Actions[] = useMemo(
    () => [
      { name: "Edit", icon: SquarePen, onAction: () => onEdit(list.id) },
      {
        name: "Delete",
        icon: Trash,
        isDanger: true,
        onAction: () => deleteList(list.id),
      },
    ],
    [list.id, onEdit, deleteList],
  );

  const collapsedListHandler = useCallback(() => {
    onCollapsed(list.id);
  }, [list.id, onCollapsed]);

  return (
    <div className="flex w-64 gap-4 items-start fade-in">
      <div className="w-64">
        {isEditing ? (
          <ListForm
            mode={KEY_MODE_EDIT}
            values={list}
            onConfirm={handleUpdate}
            onClose={onClose}
          />
        ) : (
          <List
            list={list}
            actions={actions}
            onCollapsed={collapsedListHandler}
          />
        )}
      </div>
    </div>
  );
};
