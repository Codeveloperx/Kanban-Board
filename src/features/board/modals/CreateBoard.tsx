import { lazy, Suspense, useRef } from "react";
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

  const formRef = useRef<FormHandle<Board>>(null);

  const onCloseModal = () => goBack();

  const handleNewBoard = () => {
    const form = formRef.current?.get();
    if (!form) return;

    createBoard({
      name: form.name,
      color: form.color,
      active: true,
    });

    formRef.current?.clear();
    onCloseModal();
  };

  return (
    <Modal
      title={"Crear nuevo tablero"}
      onClose={onCloseModal}
      onConfirm={handleNewBoard}
    >
      <Suspense fallback={<Loading.Modal />}>
        <FormWrapper ref={formRef} fields={fields as Field[]} />
      </Suspense>
    </Modal>
  );
};

export default CreateBoardModal;
