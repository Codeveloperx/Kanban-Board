import { BadgeCheck } from "lucide-react";
import { Button } from "../../button";
import { Text } from "../input/Text";
import { useEffect, useState } from "react";
import Dialog from "../../modals/Dialog";

import type { ItemForm } from "@/shared/types";

interface CreateItemFormProps {
  name: string;
  placeholder: string;
  onConfirm: (data: ItemForm) => Promise<void>;
  onCancel: () => void;
  initialValue?: string;
}

const validate = (value: string, name: string): string | null => {
  if (!value.trim()) return `El campo ${name} es obligatorio`;
  if (value.trim().length < 3) return "Debe tener al menos 3 caracteres";
  return null;
};

const CreateItemForm = ({
  name,
  placeholder,
  onConfirm,
  onCancel,
  initialValue = "",
}: CreateItemFormProps) => {
  const [formValue, setFormValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setFormValue(value);
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validate(formValue, name);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsLoading(true);
      await onConfirm({ name, value: formValue.trim() });
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isSuccess) return;
    const timer = setTimeout(onCancel, 1000);
    return () => clearTimeout(timer);
  }, [isSuccess, onCancel]);

  return (
    <Dialog onCancel={onCancel}>
      {isSuccess ? (
        <div className="flex flex-col gap-2 items-center w-52 p-4">
          <BadgeCheck className="h-10 w-10 text-green-600" />
          <span className="text-sm">Creado correctamente</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-52 p-2 flex flex-col gap-2">
          <label htmlFor={name} className="text-sm font-medium">
            {placeholder}
          </label>

          <Text
            id={name}
            placeholder="Enter name..."
            name={name}
            value={formValue}
            disabled={isLoading}
            onChange={handleChange}
            className={error ? "border-red-500 focus:border-red-500" : ""}
          />

          {error && <span className="text-xs text-red-500">{error}</span>}

          <div className="flex gap-2 mt-2">
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Guardando..." : "Guardar"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="w-full"
              disabled={isLoading}
              onClick={onCancel}
            >
              Cancelar
            </Button>
          </div>
        </form>
      )}
    </Dialog>
  );
};

export default CreateItemForm;
