import { useBoard } from "../../hooks/useBoard";
import Card from "../../components/common/card/Card";
import CardItem from "../../components/common/card/CardItem";

import type { Board } from "../../types/Board";

const Boards = () => {
  const { state } = useBoard();

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Boards</h1>
          <p className="text-sm text-gray-500">
            Manage all your tasks in one place
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,260px))] gap-4">
        {state.boards
          .filter((board: Board) => board.active)
          .map((it) => (
            <Card key={it.id} cardId={it.id} buttonText="Detail">
              <CardItem board={it} />
            </Card>
          ))}

        {state.boards.length === 0 && (
          <div
            className={`
            flex items-center justify-center border-2 border-dashed
            p-4 border-gray-300 transition-colors rounded-lg text-gray-400 cursor-pointer
            hover:border-gray-800 hover:text-gray-800
            `}
          >
            <span className="text-sm font-medium">New Board</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Boards;
