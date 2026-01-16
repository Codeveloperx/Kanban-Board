import { FormField } from "./FormField";
import { useCallback, useMemo, useState } from "react";

import type { Field } from "@/types/Field";

type FormProps = {
  inputRef: React.RefObject<Record<string, HTMLElement | null>>;
  fields: Field[];
  values?: Record<string, unknown>;
  errors?: Record<string, string> | null;
  onChange?: (values: Record<string, unknown>) => void;
};

const Form = ({
  inputRef,
  fields,
  values = {},
  errors = {},
  onChange,
}: FormProps) => {
  const [formValues, setFormValues] = useState<Record<string, unknown>>(values);
  
  //FIXME: VALIDAR O AGREGAR LA FUNCIONALIDAD PARA CUANDO SE REQUIERA PRECARGAR EL FORMULARIO: MODE -EDIT
  const memoizedFields = useMemo(
    () => fields.map((field) => ({ required: false, hidden: false, ...field })),
    [fields]
  );

  const handleChange = useCallback(
    (name: string, value: unknown) => {
      setFormValues((prev) => {
        const updated = { ...prev, [name]: value };
        onChange?.(updated);
        return updated;
      });
    },
    [onChange]
  );

  const inputRefCallbacks = useMemo(() => {
    const callbacks: Record<string, (el: HTMLElement | null) => void> = {};

    memoizedFields.forEach((field) => {
      callbacks[field.name] = (el: HTMLElement | null) => {
        if (inputRef?.current) {
          inputRef.current[field.name] = el;
        }
      };
    });
    return callbacks;
  }, [memoizedFields, inputRef]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="space-y-4 p-4 rounded-lg"
    >
      {memoizedFields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formValues[field.name]}
          error={errors?.[field.name]}
          onChange={handleChange}
          inputRef={inputRefCallbacks[field.name]}
        />
      ))}
    </form>
  );
};

export default Form;
