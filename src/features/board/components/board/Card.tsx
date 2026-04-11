import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { getInitials } from "@/shared/utils/getInitials";
import { ROUTES } from "@/app/router/routes";
import { SquarePen, Trash } from "lucide-react";
import { useNavigation } from "@/shared/hooks";

import type { Board } from "../../types/Board";

interface CardProps {
  board: Board;
}

export const Card = (props: CardProps) => {
  const { goTo } = useNavigation();

  const initials = getInitials(props.board.name);

  const onNavigate = () => {
    goTo(ROUTES.DETAIL_BOARD, { id: props.board.id });
  };

  const actions = [
    {
      name: "Edit",
      icon: SquarePen,
      onAction: () => goTo(ROUTES.EDIT_BOARD, { id: props.board.id }),
    },
    {
      name: "Delete",
      icon: Trash,
      isDanger: true,
      onAction: () => goTo(ROUTES.DELETE_BOARD, { id: props.board.id }),
    },
  ];

  return (
    <div
      style={{ backgroundColor: props.board.color }}
      className="relative group bg-white max-w-xs w-full p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-2xl"
    >
      <CardHeader initials={initials} onSave={() => {}} actions={actions} />
      <CardContent board={props.board} />
      <CardFooter text="View more" onClick={onNavigate} />
    </div>
  );
};
