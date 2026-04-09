import { Outlet } from "react-router-dom";
import { useBoard } from "../../hooks/board";
import BoardGrid from "@/features/board/components/board/BoardGrid";

const BoardsPage = () => {
  const { state } = useBoard();
  const boards = state.boards.filter((board) => board.active);

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mis Tableros</h1>
          <p className="text-sm text-gray-500">
            {boards.length === 0
              ? "Crea tu primer tablero para empezar a organizar tus proyectos."
              : `${boards.length} ${boards.length === 1 ? "tablero activo" : "tableros activos"}`}
          </p>
        </div>
      </div>

      <BoardGrid boards={boards} />

      <Outlet />
    </div>
  );
};

export default BoardsPage;
