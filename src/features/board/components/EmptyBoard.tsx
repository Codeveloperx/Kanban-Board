interface PropsType {
  title: string;
  onClick: () => void;
}

export const EmptyBoard = ({ title, onClick }: PropsType) => {
  return (
    <div
      onClick={onClick}
      className={`
            flex items-center justify-center border-2 border-dashed
            p-4 border-gray-300 transition-colors rounded-lg text-gray-400 cursor-pointer
            hover:border-gray-800 hover:text-gray-800
            `}
    >
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};
