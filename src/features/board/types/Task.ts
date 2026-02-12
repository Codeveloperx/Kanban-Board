import type { BaseEntity } from "@/shared/types/BaseEntity";
import type { Tag } from "./Tag";

type Priority = "Low" | "Medium" | "High";

export interface Task extends BaseEntity {
  listId: string;
  title: string;
  status: boolean;
  priority: Priority;
  position: number;
  tags: Tag[];
  description?: string;
}
