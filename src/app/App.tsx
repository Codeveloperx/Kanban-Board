import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import { AppProvider } from "./AppProvider";

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
