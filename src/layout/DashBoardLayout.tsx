import { Header, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useNavigation } from "@/shared/hooks";

export const DashBoardLayout = () => {
  const { goTo } = useNavigation();

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Header
          showAction={true}
          onActionClick={() => goTo(ROUTES.NEW_BOARD)}
        />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
