import { memo } from "react";

interface NumberProps {
  id: string;
  name: string;
  value: number | string;
  placeholder?: string;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
}

export const NumberInput = memo(
  ({
    id,
    name,
    value,
    placeholder,
    min,
    max,
    onChange,
    inputRef,
  }: NumberProps) => {
    return (
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="number"
        value={value || ""}
        placeholder={placeholder}
        autoComplete="off"
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem",
          border: "1px solid #d1d5db",
          borderRadius: "0.375rem",
          outline: "none",
        }}
      />
    );
  },
);
