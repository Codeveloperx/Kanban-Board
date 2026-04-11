import { CreateItemForm } from "@/shared/ui/form/item/CreateItemForm";
import { useRef } from "react";
import formCreate from "@/forms/create_list.json";
import formEdit from "@/forms/edit_list.json";

import type { List } from "../../types/List";
import type { Field, FormHandle } from "@/shared/types";

type ListFormProps = {
  mode: "create" | "edit";
  onClose: () => void;
  onConfirm: (values: List) => void;
  values?: List;
};

export const ListForm = ({
  mode,
  onClose,
  onConfirm,
  values,
}: ListFormProps) => {
  const formRef = useRef<FormHandle<List>>(null);
  const isEdit = mode === "edit";
  const form = isEdit ? (formEdit as Field[]) : (formCreate as Field[]);

  const onSubmit = () => {
    const formValues = formRef.current?.get();
    if (!formValues) return;

    onConfirm({ ...formValues, active: true });
    formRef.current?.clear();
    onClose();
  };

  return (
    <CreateItemForm
      formRef={formRef}
      form={form}
      onConfirm={onSubmit}
      onCancel={onClose}
      values={values}
    />
  );
};
