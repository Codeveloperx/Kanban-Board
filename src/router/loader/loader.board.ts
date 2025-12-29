import { getBoards } from "../../utils/boardStorage";
import { hasSeenHome } from "../utils/onboarding";
import { redirect } from "react-router-dom";
import { ROUTES } from "../routes";

export async function boardsLoader() {
  if (!hasSeenHome()) {
    throw redirect(ROUTES.HOME);
  }

  await new Promise((r) => setTimeout(r, 300));

  return getBoards();
}
