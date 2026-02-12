import { ROUTES } from "@/app/router/routes";
import { redirect } from "react-router-dom";
import { getItems } from "@/shared/utils";
import { KEY_ONBOARDING_COMPLETED } from "@/shared/constants/Constants";
import { storage } from "../utils/boardStorage";

export async function boardsLoader() {
  const hasSeenHome = getItems<Boolean>(KEY_ONBOARDING_COMPLETED);

  if (!hasSeenHome) {
    throw redirect(ROUTES.HOME);
  }

  await new Promise((r) => setTimeout(r, 300));

  return storage.boards.load();
}
