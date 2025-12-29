interface CardProps {
  children?: React.ReactNode;
  buttonText?: string;
  textPrimary?: string;
  textSecondary?: string;
  footer?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="bg-white rounded-2xl p-2 hover:scale-[1.02] transition-transform shadow-sm">
      <div>{props.children}</div>

      <div className="flex justify-between items-center mx-4 mt-4 mb-2">
        <div className="">
          <h2 className=" font-bold">{props.textPrimary}</h2>
          <span className="text-xs">{props.textSecondary}</span>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="text-white bg-gray-900 hover:bg-gray-950 px-4 py-1 rounded-full cursor-pointer"
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
