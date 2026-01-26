import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { getInitials } from "@/shared/utils/getInitials";
import { ROUTES } from "@/app/router/routes";
import { SquarePen } from "lucide-react";
import { useNavigation } from "@/shared/hooks";

import type { Board } from "../types/Board";

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
  ];

  return (
    <div
      style={{ backgroundColor: props.board.color }}
      className="group relative w-full max-w-[340px]  rounded-[20px] pt-6 px-6 pb-4 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-zinc-800 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader initials={initials} onSave={() => {}} actions={actions} />

      <CardContent board={props.board} />
      <CardFooter text="View more" onClick={onNavigate} />
    </div>
  );
};
