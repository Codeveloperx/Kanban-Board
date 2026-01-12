import { Trash2 } from "lucide-react";
import { useBoardActions } from "@/hooks/useBoardActions";
import Dropdown from "../button/Dropdown";

interface CardProps {
  children?: React.ReactNode;
  cardId: string;
  buttonText: string;
}

const Card = (props: CardProps) => {
  const { deleteBoard } = useBoardActions();

  const options = [
    {
      label: "Eliminar",
      icon: Trash2,
      danger: true,
      onClick: () => deleteBoard(props.cardId),
    },
  ];

  return (
    <div className="relative bg-white rounded-2xl p-2 shadow-sm hover:shadow-2xl cursor-pointer">
      <div>{props.children}</div>

      <div className="flex items-center justify-end gap-2 mt-4">
        <button className="text-white text-sm bg-gray-800 hover:bg-gray-900 px-4 py-1 rounded-lg cursor-pointer">
          {props.buttonText}
        </button>
        <Dropdown options={options} />
      </div>
    </div>
  );
};

export default Card;
