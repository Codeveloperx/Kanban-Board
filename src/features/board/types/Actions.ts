import type { LucideIcon } from "lucide-react";

type ActionsType = "Delete" | "Update";

export interface Actions {
  name: string;
  icon: LucideIcon;
  onAction: () => void;
  type?: ActionsType;
}
