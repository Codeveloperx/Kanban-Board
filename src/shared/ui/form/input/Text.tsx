import { memo } from "react";

interface TextProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
}

export const Text = memo(
  ({ name, value, placeholder, onChange, inputRef }: TextProps) => {
    return (
      <input
        ref={inputRef}
        id={name}
        name={name}
        autoComplete="off"
        type="text"
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  },
);

Text.displayName = "Text";
