import { hasSeenHome } from "../utils/onBoarding";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../routes";

const OnboardingGuard = () => {
  const { pathname } = useLocation();
  const isCompleted = hasSeenHome();

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

const navigateTo = (path: string) => <Navigate to={path} replace />;
