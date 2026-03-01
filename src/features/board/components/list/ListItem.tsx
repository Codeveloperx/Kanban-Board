import { List } from "./List";
import { ListForm } from "./ListForm";
import { SquarePen } from "lucide-react";
import { useCallback, useMemo } from "react";
import { useListActions } from "../../hooks/list";
import { KEY_MODE_EDIT } from "@/shared/constants/Constants";

import type { List as ListType } from "../../types/List";

interface ListItemProps {
  list: ListType;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onClose: () => void;
}

export const ListItem = ({
  list,
  isEditing,
  onEdit,
  onClose,
}: ListItemProps) => {
  const { updateList } = useListActions();

  const handleUpdate = useCallback(
    (values: ListType) => {
      updateList({ ...values });
    },

    [list.id, list.boardId, updateList],
  );

  const actions = useMemo(
    () => [{ name: "Edit", icon: SquarePen, onAction: () => onEdit(list.id) }],
    [list.id, onEdit],
  );

  return (
    <div className="w-64">
      {isEditing ? (
        <ListForm
          mode={KEY_MODE_EDIT}
          values={list}
          onConfirm={handleUpdate}
          onClose={onClose}
        />
      ) : (
        <List list={list} actions={actions} />
      )}
    </div>
  );
};
