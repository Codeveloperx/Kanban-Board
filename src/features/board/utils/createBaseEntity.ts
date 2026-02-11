import { UUID } from "@/shared/utils";
import type { BaseEntity } from "../types/BaseEntity";

export const createBaseEntity = (): BaseEntity => ({
  id: UUID(),
  createdAt: new Date().toISOString(),
});
