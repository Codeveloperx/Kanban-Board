import { lazy, Suspense, useRef, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const values = useBoardById(id);

  const { goBack } = useNavigation();
  const { updateBoard } = useBoardActions();

  const formRef = useRef<FormHandle<Board>>(null);

  const onCloseModal = () => goBack();

  const handleUpdateBoard = () => {
    const form = formRef.current?.get();
    if (!form) return;
    setIsLoading(true);
    try {
      updateBoard({
        id: form.id,
        name: form.name,
        color: form.color,
        active: true,
      });
      formRef.current?.clear();
      onCloseModal();
    } catch (error) {
      console.log("Error creating board:", error);
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Editar tablero"
      onClose={onCloseModal}
      onConfirm={handleUpdateBoard}
      isSubmit={isLoading}
    >
      <Suspense fallback={<Loading.Modal />}>
        <FormWrapper ref={formRef} fields={fields as Field[]} data={values} />
      </Suspense>
    </Modal>
  );
};

export default UpdateBoard;
