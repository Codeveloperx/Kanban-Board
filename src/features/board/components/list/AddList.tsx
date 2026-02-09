import { Button } from "@/shared/ui/button";
import { useOpen } from "@/shared/hooks";
import CreateItemForm from "@/shared/ui/form/item/CreateItemForm";

import type { ItemForm } from "@/shared/types";
import { useListsActions } from "../../hooks/useListsActions";
import { useParams } from "react-router-dom";
import { UUID } from "@/shared/utils";

const AddList = () => {
  const { createList } = useListsActions();
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useOpen();

  const onHandleSave = async (data: ItemForm) => {
    // console.log("GUARDAR -> ", data.name, data.value);
    if (!id) return;

    createList({
      boardId: id,
      collapsed: false,
      id: UUID(),
      title: data.value,
      // tasks: [],
      position: 0,
    });
  };

  return (
    <div>
      {isOpen ? (
        <CreateItemForm
          name="title_List"
          placeholder="Title name"
          onCancel={onClose}
          onConfirm={onHandleSave}
        />
      ) : (
        <Button variant="add" className="w-48" onClick={onOpen}>
          Agregar Lista
        </Button>
      )}
    </div>
  );
};

export default AddList;
