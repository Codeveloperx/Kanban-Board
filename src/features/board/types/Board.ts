import type { List } from "@/shared/types";
import type { LucideIcon } from "lucide-react";

type ActionsType = "Delete" | "Update";

export interface Actions {
  name: string;
  icon: LucideIcon;
  onAction: () => void;
  type?: ActionsType;
}

export interface Board {
  id: string;
  name: string;
  color: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  list?: List[];
  active: Boolean;
}
