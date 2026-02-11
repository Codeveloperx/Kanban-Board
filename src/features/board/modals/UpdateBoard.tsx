import { lazy, Suspense, useRef } from "react";
import { useBoardActions } from "../hooks/board";
import { useBoardById } from "../hooks";
import { useNavigation } from "@/shared/hooks";
import { useParams } from "react-router-dom";
import fields from "@/forms/edit_board.json";
import Loading from "@/shared/ui/loading/Loading";
import Modal from "@/shared/ui/modals/Modal";

import type { Board } from "../types/Board";
import type { Field, FormHandle } from "@/shared/types";
const FormWrapper = lazy(() => import("@/shared/ui/form/fields/FormWrapper"));

const UpdateBoard = () => {
  const { id } = useParams();
  const values = useBoardById(id);

  const { goBack } = useNavigation();
  const { updateBoard } = useBoardActions();

  const formRef = useRef<FormHandle<Board>>(null);

  const onCloseModal = () => goBack();

  const handleUpdateBoard = () => {
    const form = formRef.current?.get();
    if (!form) return;

    updateBoard({
      id: form.id,
      name: form.name,
      color: form.color,
      active: true,
    });
    formRef.current?.clear();
    onCloseModal();
  };

  return (
    <Modal
      title="Editar tablero"
      onClose={onCloseModal}
      onConfirm={handleUpdateBoard}
    >
      <Suspense fallback={<Loading.Modal />}>
        <FormWrapper ref={formRef} fields={fields as Field[]} data={values} />
      </Suspense>
    </Modal>
  );
};

export default UpdateBoard;
