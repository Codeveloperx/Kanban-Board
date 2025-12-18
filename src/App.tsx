import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index";
import { BoardProvider } from "./context/BoardProvider";

export default function App() {
  return (
    <BoardProvider>
      <RouterProvider router={router} />
    </BoardProvider>
  );
}
