interface PropsType {
  text: string;
  onClick?: () => void;
}

export const CardFooter = ({ text, onClick }: PropsType) => {
  return (
    <div className="flex items-center pt-4 border-t border-neutral-200">
      <button
        onClick={onClick}
        className="px-7 py-3 flex-1 rounded-xl text-[15px] font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 bg-zinc-900 text-white hover:bg-black cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
};
