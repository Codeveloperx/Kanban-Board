import { Button } from "../../button";
import { Suspense, type RefObject } from "react";
import Dialog from "../../modals/Dialog";
import FormWrapper from "../fields/FormWrapper";
import Loading from "../../loading/Loading";

import type { Field, FormHandle } from "@/shared/types";
import type { List } from "@/features/board/types/List";

interface PropsTypes {
  onConfirm: () => void;
  onCancel: () => void;
  form: Field[];
  formRef: RefObject<FormHandle<List> | null>;
  values?: List;
}

export const CreateItemForm = (props: PropsTypes) => {
  return (
    <Dialog onCancel={props.onCancel}>
      <Suspense fallback={<Loading.Overlay />}>
        <FormWrapper
          ref={props.formRef}
          fields={props.form}
          data={props.values}
        />
      </Suspense>
      <div className="flex gap-2 mt-2 p-4">
        <Button variant="primary" className="w-full" onClick={props.onConfirm}>
          Guardar
        </Button>

        <Button variant="secondary" className="w-full" onClick={props.onCancel}>
          Cancelar
        </Button>
      </div>
    </Dialog>
  );
};
