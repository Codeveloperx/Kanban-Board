import { COLORS } from "../../../../utils/color";
import { Select } from "../select/Select";
import { Text } from "../input/Text";
import ColorPicker from "../color/Color";

import type { Field } from "../../../../types/Field";
import type React from "react";

export interface FieldProps {
  field: Field;
  value: unknown;
  onChange: (name: string, value: unknown) => void;
  inputRef?: (element: HTMLElement | null) => void;
}

const Fields: Record<string, (props: FieldProps) => React.ReactNode> = {
  text: ({ field, value, onChange, inputRef }) => (
    <Text
      id={field.name}
      name={field.name}
      placeholder={field.placeholder}
      value={value as string}
      onChange={(val) => onChange(field.name, val)}
      inputRef={inputRef as (el: HTMLInputElement | null) => void}
    />
  ),

  email: ({ field, value, onChange, inputRef }) => (
    <input
      ref={inputRef as (el: HTMLInputElement | null) => void}
      id={field.name}
      name={field.name}
      type="email"
      placeholder={field.placeholder}
      value={(value as string) || ""}
      onChange={(e) => onChange(field.name, e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  ),

  select: ({ field, value, onChange, inputRef }) => (
    <Select
      id={field.name}
      name={field.name}
      value={value as string}
      options={field.options || []}
      onChange={(val) => onChange(field.name, val)}
      inputRef={inputRef as (el: HTMLSelectElement | null) => void}
    />
  ),

  color: ({ field, value, onChange }) => (
    <ColorPicker
      id={field.name}
      name={field.name}
      value={value as string}
      colors={field.options || COLORS}
      onChange={(val) => onChange(field.name, val)}
    />
  ),
};

export const getFieldRenderer = (type: string) => Fields[type] ?? null;
