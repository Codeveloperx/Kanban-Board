import { memo } from "react";
import { RenderField } from "./RenderField";

import type { Field } from "@/shared/types/Field";

interface FormFieldProps {
  field: Field;
  value: unknown;
  error?: string;
  onChange: (name: string, value: unknown) => void;
  inputRef: (el: HTMLElement | null) => void;
}

export const FormField = memo(
  ({ field, value, error, onChange, inputRef }: FormFieldProps) => {
    return (
      <div className={`flex flex-col ${field.hidden ? "hidden" : ""}`}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <RenderField
          field={field}
          value={value}
          onChange={onChange}
          inputRef={inputRef}
        />

        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
      </div>
    );
  }
);
