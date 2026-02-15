import type { LucideIcon } from "lucide-react";

export interface Actions {
  name: string;
  icon: LucideIcon;
  onAction: () => void;
  isDanger?: boolean;
}
