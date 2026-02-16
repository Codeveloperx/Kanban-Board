import { Button } from "@/shared/ui/button";
import { CreateItemForm } from "@/shared/ui/form/item/CreateItemForm";
import { useListActions } from "../../hooks/list";
import { useOpen } from "@/shared/hooks";
import { useParams } from "react-router-dom";
import { useRef } from "react";

import type { CreateData } from "../../types/List";
import type { FormHandle } from "@/shared/types";

const AddList = () => {
  const { addList } = useListActions();
  const { id: boardId } = useParams();
  const { isOpen, onOpen, onClose } = useOpen();

  const formRef = useRef<FormHandle<CreateData>>(null);

  const onCreateList = () => {
    const values = formRef.current?.get();
    if (!values || !boardId) return;
    try {
      addList({ ...values, boardId: boardId });
      formRef.current?.clear();
      onClose();
    } finally {
      formRef.current?.clear();
    }
  };

  return (
    <div>
      {isOpen ? (
        <CreateItemForm
          formRef={formRef}
          onCancel={onClose}
          onConfirm={onCreateList}
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
