import { memo, useEffect, useState } from "react";

interface ColorPickerProps {
  name: string;
  value: string;
  colors: string[];
  onChange: (value: string) => void;
}

const ColorPicker = memo(
  ({ name, value, colors, onChange }: ColorPickerProps) => {
    const [selectedColor, setSelectedColor] = useState<string>(
      value || colors[0],
    );

    useEffect(() => {
      onChange(selectedColor);
    }, [onChange, selectedColor]);

    const handleSelectColor = (color: string) => {
      setSelectedColor(color);
      onChange(color);
    };

    return (
      <div className="space-y-3">
        <div
          role="radiogroup"
          aria-label={name}
          className="grid grid-cols-[repeat(auto-fit,minmax(24px,1fr))] gap-1"
        >
          {colors.map((color) => (
            <button
              key={color}
              id={name}
              name={name}
              type="button"
              role="radio"
              aria-checked={selectedColor === color}
              onClick={() => handleSelectColor(color)}
              className={`w-6 h-6 rounded-md transition-all focus:outline-none ${
                selectedColor === color
                  ? "ring-2 ring-gray-800 ring-offset-2 scale-110"
                  : "hover:scale-105"
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Seleccionar color ${color}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-md">
          <div
            className="w-8 h-8 rounded-md border border-gray-300"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="font-mono text-sm text-gray-700">
            {selectedColor}
          </span>
        </div>
      </div>
    );
  },
);

export default ColorPicker;
