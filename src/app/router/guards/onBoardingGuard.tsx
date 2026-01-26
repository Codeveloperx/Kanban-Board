import { getItems } from "@/shared/utils";
import { KEY_ONBOARDING_COMPLETED } from "@/shared/constants/Constants";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../routes";
import { useNavigation } from "@/shared/hooks";

const OnboardingGuard = () => {
  const { goTo: navigateTo } = useNavigation();
  const { pathname } = useLocation();

  const isCompleted = getItems<boolean>(KEY_ONBOARDING_COMPLETED) ?? false;
  const isHome = pathname === ROUTES.HOME;
  const isAllowed = isHome;

  if (!isCompleted && !isAllowed) {
    return navigateTo(ROUTES.HOME);
  }

  if (isCompleted && isHome) {
    return navigateTo(ROUTES.BOARDS);
  }

  return <Outlet />;
};
export default OnboardingGuard;
