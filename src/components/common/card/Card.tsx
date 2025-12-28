import { Bookmark } from "lucide-react";

interface CardProps {
  title: string;
  color?: string;
  description?: string;
  createdAt?: string;
  tags?: string[];
}

interface Item {
  name: string;
}

const items: Item[] = [
  { name: "Part time" },
  { name: "Senior Level" },
  { name: "Junior Level" },
  { name: "Project Work" },
];

const Card = (props: CardProps) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="flex flex-col gap-4 px-4 py-4 rounded-xl"
    >
      <div className="flex flex-1 justify-between items-center">
        <div className="flex justify-center items-center rounded-full bg-white px-4 py-2">
          <span className="text-xs font-medium text-gray-800">
            {props.createdAt}
          </span>
        </div>
        <div className="flex w-8 h-8 justify-center items-center rounded-full bg-white">
          <Bookmark className="w-4 h-4" />
        </div>
      </div>

      <div>
        <h2 className="text-xs font-medium mx-4">Amazon</h2>
        <h1 className="text-xl font-bold mx-4">UX Designer</h1>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item: Item) => (
          <div className="flex justify-center items-center border border-gray-400 rounded-full px-4 py-2">
            <span className="text-xs font-medium text-gray-800">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
