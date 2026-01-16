type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const Defaultbutton = (props: ButtonProps) => (
  <button
    type="button"
    className={`${props.className} flex-1 rounded px-3 py-1 text-white shadow cursor-pointer`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.label}
  </button>
);

const Button = {
  Base: (props: ButtonProps) => (
    <Defaultbutton {...props} className={` ${props.className}`} />
  ),
  Add: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-gray-700 hover:bg-gray-800" />
  ),
  Cancel: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-gray-400 hover:bg-gray-300 hover:text-gray-700" />
  ),
  Delete: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-red-500 hover:bg-red-700" />
  ),
};

export default Button;
