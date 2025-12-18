import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";

const DashBoardLayout = () => {
  return (
    <div className="flex h-screen border-2">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="h-full p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
