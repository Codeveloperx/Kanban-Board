import { memo } from "react";

interface SelectProps {
  id: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  inputRef?: (el: HTMLSelectElement | null) => void;
}

export const Select = memo(
  ({ id, name, value, options, onChange, inputRef }: SelectProps) => {
    return (
      <select
        ref={inputRef}
        id={id}
        name={name}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecciona una opción</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  },
);

Select.displayName = "Select";
