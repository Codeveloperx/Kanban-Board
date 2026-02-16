import { Button } from "../../button";
import { Suspense, type RefObject } from "react";
import Dialog from "../../modals/Dialog";
import fields from "@/forms/create_list.json";
import FormWrapper from "../fields/FormWrapper";
import Loading from "../../loading/Loading";

import type { Field, FormHandle } from "@/shared/types";

interface PropsTypes {
  onConfirm: () => void;
  onCancel: () => void;
  formRef: RefObject<FormHandle<Record<string, unknown>> | null>;
}

export const CreateItemForm = (props: PropsTypes) => {
  return (
    <Dialog onCancel={props.onCancel}>
      <Suspense fallback={<Loading.Overlay />}>
        <FormWrapper ref={props.formRef} fields={fields as Field[]} />
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
