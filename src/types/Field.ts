export type FieldType = "text" | "number" | "color" | "select";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  hidden?: boolean;
  errorMessage?: string;
  options?: string[];
  min?: number;
  max?: number;
}
