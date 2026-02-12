import { lazy, Suspense, useRef, useState } from "react";
import { useBoardActions } from "../hooks/board";
import { useNavigation } from "@/shared/hooks";
import fields from "@/forms/create_board.json";
import Loading from "@/shared/ui/loading/Loading";
import Modal from "@/shared/ui/modals/Modal";

import type { Board } from "../types/Board";
import type { Field, FormHandle } from "@/shared/types";
const FormWrapper = lazy(() => import("@/shared/ui/form/fields/FormWrapper"));

const CreateBoardModal = () => {
  const { goBack } = useNavigation();
  const { createBoard } = useBoardActions();
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<FormHandle<Board>>(null);

  const onCloseModal = () => goBack();

  const handleNewBoard = async () => {
    const form = formRef.current?.get();

    if (!form) return;
    setIsLoading(true);

    try {
      createBoard({
        name: form.name.trim(),
        color: form.color,
        active: true,
      });

      formRef.current?.clear();
      onCloseModal();
    } catch (error) {
      console.error("Error creating board:", error);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Crear nuevo tablero"
      onClose={onCloseModal}
      onConfirm={handleNewBoard}
      isSubmit={isLoading}
    >
      <Suspense fallback={<Loading.Modal />}>
        <FormWrapper ref={formRef} fields={fields as Field[]} />
      </Suspense>
    </Modal>
  );
};

export default CreateBoardModal;
