import { useState } from "react";
import { useBoardActions } from "../hooks/board";
import { useBoardById } from "../hooks";
import { useNavigation } from "@/shared/hooks";
import { useParams } from "react-router-dom";
import Modal from "@/shared/ui/modals/Modal";

const DeleteBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const values = useBoardById(id);

  const { goBack } = useNavigation();
  const { deleteBoard } = useBoardActions();

  const onCloseModal = () => goBack();

  const handlDeleteBoard = () => {
    if (!values) return;
    setIsLoading(true);
    try {
      deleteBoard(values.id);
      onCloseModal();
    } catch (error) {
      console.log("Error deleting board:", error);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Eliminar tablero"
      onClose={onCloseModal}
      onConfirm={handlDeleteBoard}
      isSubmit={isLoading}
      textConfirm="Aceptar"
    >
      <div className="flex flex-col gap-3 p-2">
        <span className="text-sm">
          El tablero "{values?.name}" y todo su contenido (listas y tarjetas)
          será eliminado.
        </span>
        <span className="mb-2">¿Deseas continuar?</span>
      </div>
    </Modal>
  );
};

export default DeleteBoard;
