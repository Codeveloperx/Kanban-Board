import type { BaseEntity } from "@/shared/types/BaseEntity";
import type { Tag } from "./Tag";

export interface Board extends BaseEntity {
  name: string;
  color: string;
  tags?: Tag[];
  active: Boolean;
}

export type CreateData = Omit<Board, "id" | "createdAt" | "updatedAt">;
export type UpdatedData = Omit<Board, "createdAt">;
