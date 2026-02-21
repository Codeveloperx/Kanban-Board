import { ListItem } from "./ListItem";
import { useEditList } from "../../hooks/list/useEditList";
import AddList from "./AddList";

interface ListContainerProps {
  boardId: string;
}

export const ListContainer = ({ boardId }: ListContainerProps) => {
  const { lists, editingListId, startEditing, stopEditing } =
    useEditList(boardId);

  return (
    <div>
      <div className="flex gap-4 items-start">
        {lists.map((list) => (
          <ListItem
            key={list.id}
            list={list}
            isEditing={editingListId === list.id}
            onEdit={startEditing}
            onClose={stopEditing}
          />
        ))}
        <AddList boardId={boardId} />
      </div>
    </div>
  );
};
