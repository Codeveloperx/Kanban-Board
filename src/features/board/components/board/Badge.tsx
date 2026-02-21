import type { Tag } from "../../types/Tag";

interface BadgeProps {
  tags: Tag[];
}

export const Badge = (props: BadgeProps) => {
  return (
    <div className="flex gap-2 mb-5 flex-wrap">
      {props.tags.map((tag, index) => (
        <span
          key={index}
          className="bg-neutral-100 px-3.5 py-1.5 rounded-full text-[13px] text-neutral-700 font-medium hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-200"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};
