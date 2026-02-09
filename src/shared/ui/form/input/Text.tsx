import { memo } from "react";

interface TextProps {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange: (value: string) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
}

export const Text = memo(
  ({
    id,
    name,
    value,
    placeholder,
    className,
    disabled = false,
    onChange,
    inputRef,
  }: TextProps) => {
    return (
      <input
        ref={inputRef}
        id={id}
        name={name}
        disabled={disabled}
        type="text"
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${className} w-full px-3 py-2 border border-gray-300 rounded-md
        focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
    );
  },
);

Text.displayName = "Text";
