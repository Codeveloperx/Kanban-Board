import { Header } from "./components";
import { Outlet } from "react-router-dom";

export const OnBoardingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 min-h-0 overflow-hidden bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
