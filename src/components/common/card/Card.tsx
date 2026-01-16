interface CardProps {
  children?: React.ReactNode;
  buttonText: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="bg-white rounded-2xl p-2 hover:scale-[1.02] transition-transform shadow-sm">
      <div>{props.children}</div>

      <div className="flex items-center mt-4">
        <button
          type="button"
          className="text-white text-sm bg-gray-800 hover:bg-gray-900 px-4 py-1 rounded-lg cursor-pointer"
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
