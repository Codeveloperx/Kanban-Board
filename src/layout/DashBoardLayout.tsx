import { Header, Sidebar } from "@/layout/components";
import { Outlet } from "react-router-dom";
import { ROUTES } from "@/app/router/routes";
import { useNavigation } from "@/shared/hooks";

export const DashBoardLayout = () => {
  const { goTo } = useNavigation();

  return (
    <div className="flex min-h-screen border-2">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header
          showAction={true}
          onActionClick={() => goTo(ROUTES.NEW_BOARD)}
        />
        <main className="h-full p-6 flex-1 overflow-y-auto overflow-x-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
