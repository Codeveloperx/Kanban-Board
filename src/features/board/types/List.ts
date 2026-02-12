import type { BaseEntity } from "@/shared/types/BaseEntity";

export interface List extends BaseEntity {
  boardId: string;
  title: string;
  position: number;
  collapsed: boolean;
  color?: string;
}
