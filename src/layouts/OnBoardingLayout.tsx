import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const OnBoardingLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default OnBoardingLayout;
