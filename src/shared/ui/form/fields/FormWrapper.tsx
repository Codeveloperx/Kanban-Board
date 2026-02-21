import {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Form from "./Form";

import type { FormHandle, Field } from "@/shared/types";

type FormWrapperProps<T extends object> = {
  fields: Field[];
  data?: Partial<T>;
};

function FormWrapperInner<T extends object>(
  { fields, data = {} }: FormWrapperProps<T>,
  ref: React.Ref<FormHandle<T>>,
) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const valuesRef = useRef<Partial<T>>(data);
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
          get: () => {
      if (!validate()) return null;
      
      // Solo devolver los campos definidos en el formulario
      const filtered = memoizedFields.reduce((acc, field) => {
        const key = field.name as keyof T;
        acc[key] = valuesRef.current[key];
        return acc;
      }, {} as Partial<T>);

      return filtered as T;
    },
      // get: () => (validate() ? (valuesRef.current as T) : null),
      clear: () => {
        valuesRef.current = {};
        setErrors({});
      },
      focus: (name: string) => {
        const element = inputRef.current[name];
        if (element && "focus" in element) {
          (element as HTMLInputElement).focus();
        }
      },
    }),
    [validate, data],
  );

  return (
    <Form
      inputRef={inputRef}
      fields={memoizedFields}
      values={data as Record<string, unknown>}
      onChange={handleChange}
      errors={errors}
    />
  );
}

const FormWrapper = forwardRef(FormWrapperInner) as <T extends object>(
  props: FormWrapperProps<T> & { ref?: React.Ref<FormHandle<T>> },
) => React.ReactElement;

export default FormWrapper;
