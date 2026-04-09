import type { BaseEntity } from "@/shared/types/BaseEntity";

export interface List extends BaseEntity {
  boardId: string;
  title: string;
  position?: number;
  collapsed?: boolean;
  color?: string;
  active?: boolean;
}

export type CreateData = Omit<List, "id" | "createdAt" | "updatedAt">;
export type UpdatedData = Omit<List, "createdAt">;
