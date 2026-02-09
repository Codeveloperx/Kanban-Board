export interface FormHandle<T = Record<string, unknown>> {
  get: () => T | null;
  clear: () => void;
  focus: (name: string) => void;
}

export type ItemForm = {
  name: string;
  value: string;
};