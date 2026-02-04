import { useOpen } from "@/shared/hooks";
import { Button } from "@/shared/ui/button";
import CreateItemForm from "@/shared/ui/form/item/CreateItemForm";

const CreateTask = () => {
  const { isOpen, onOpen, onClose } = useOpen();
  return (
    <>
      {isOpen ? (
        <CreateItemForm onConfirm={() => {}} onCancel={onClose} />
      ) : (
        <Button variant="add" className="w-full mb-3" onClick={onOpen}>
          Agregar tarea
        </Button>
      )}
    </>
  );
};

export default CreateTask;
