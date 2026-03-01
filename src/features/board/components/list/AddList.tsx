import { useOpen } from "@/shared/hooks";
import { useListActions } from "../../hooks/list";
import { ListForm } from "./ListForm";
import { Button } from "@/shared/ui/button";
import { KEY_MODE_CREATE } from "@/shared/constants/Constants";

import type { List } from "../../types/List";

interface PropsType {
  boardId: string;
}

const AddList = ({ boardId }: PropsType) => {
  const { isOpen, onOpen, onClose } = useOpen();
  const { addList } = useListActions();

  const handleConfirm = (values: List) => {
    addList({ ...values, boardId });
  };

  return isOpen ? (
    <ListForm
      mode={KEY_MODE_CREATE}
      onConfirm={handleConfirm}
      onClose={onClose}
    />
  ) : (
    <Button variant="add" className="w-48" onClick={onOpen}>
      Agregar Lista
    </Button>
  );
};

export default AddList;
