import { ROUTES } from "@/app/router/routes";
import { redirect } from "react-router-dom";
import { getBoards } from "../utils/boardStorage";
import { getItems } from "@/shared/utils";
import { KEY_ONBOARDING_COMPLETED } from "@/shared/constants/Constants";

export async function boardsLoader() {
  const hasSeenHome = getItems<Boolean>(KEY_ONBOARDING_COMPLETED);

  if (!hasSeenHome) {
    throw redirect(ROUTES.HOME);
  }

  await new Promise((r) => setTimeout(r, 300));

  return getBoards();
}
