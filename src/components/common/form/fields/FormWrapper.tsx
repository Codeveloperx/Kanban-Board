import {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Form from "./Form";

import type { FormHandle, Field } from "@/types";

type FormWrapperProps<T extends object> = {
  fields: Field[];
  initialValues?: Partial<T>;
};

function FormWrapperInner<T extends object>(
  { fields, initialValues = {} }: FormWrapperProps<T>,
  ref: React.Ref<FormHandle<T>>
) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const valuesRef = useRef<Partial<T>>(initialValues);
  const inputRef = useRef<Record<string, HTMLElement | null>>({});
  const memoizedFields = useMemo(() => fields, [fields]);

  const handleChange = useCallback((newValues: Record<string, unknown>) => {
    valuesRef.current = newValues as Partial<T>;
  }, []);

  const validate = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    memoizedFields.forEach((field) => {
      const rawValue = valuesRef.current[field.name as keyof T];
      const isEmpty =
        rawValue === undefined ||
        rawValue === null ||
        (typeof rawValue === "string" && rawValue.trim() === "");

      if (field.required && isEmpty) {
        newErrors[field.name] =
          field.errorMessage || `${field.label} es obligatorio`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [memoizedFields]);

  useImperativeHandle(
    ref,
    () => ({
      get: () => (validate() ? (valuesRef.current as T) : null),
      clear: () => {
        valuesRef.current = initialValues;
        setErrors({});
      },
      focus: (name: string) => {
        const element = inputRef.current[name];
        if (element && "focus" in element) {
          (element as HTMLInputElement).focus();
        }
      },
    }),
    [validate, initialValues]
  );

  return (
    <Form
      inputRef={inputRef}
      fields={memoizedFields}
      values={initialValues as Record<string, unknown>}
      onChange={handleChange}
      errors={errors}
    />
  );
}

const FormWrapper = forwardRef(FormWrapperInner) as <T extends object>(
  props: FormWrapperProps<T> & { ref?: React.Ref<FormHandle<T>> }
) => React.ReactElement;

export default FormWrapper;
