import { ListContainer } from "./ListContainer";
import AddList from "./AddList";
import { useList } from "../../hooks/list";

interface ListWrapperProps {
  boardId: string;
}

const ListWrapper = ({ boardId }: ListWrapperProps) => {
  const { state } = useList();
  const lists = state.lists.filter(
    (list) => list.boardId === boardId && list.active,
  );


  console.log('List -> ', lists)
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
