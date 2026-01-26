import { getItems } from "@/shared/utils";
import { KEY_ONBOARDING_COMPLETED } from "@/shared/constants/Constants";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../routes";

const OnboardingGuard = () => {
  const { pathname } = useLocation();
  const isCompleted = getItems<boolean>(KEY_ONBOARDING_COMPLETED) ?? false;
  const isOnHomePage = pathname === ROUTES.HOME;

  if (!isCompleted && !isOnHomePage) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  if (isCompleted && isOnHomePage) {
    return <Navigate to={ROUTES.BOARDS} replace />;
  }

  return <Outlet />;
};

export default OnboardingGuard;
