import { ListContainer } from "./ListContainer";
import AddList from "./AddList";
import { listFilter } from "../../utils/filterData";

interface ListWrapperProps {
  boardId: string;
}

const ListWrapper = ({ boardId }: ListWrapperProps) => {
  const lists = listFilter.getByBoardId(boardId);

  return (
    <div className="h-full overflow-x-auto overflow-y-hidden">
      <div className="flex items-start gap-4 px-6 h-full w-max">
        {lists?.map((list) => (
          <ListContainer key={list.id} list={list} />
        ))}

        <AddList boardId={boardId} />
      </div>
    </div>
  );
};

export default ListWrapper;
