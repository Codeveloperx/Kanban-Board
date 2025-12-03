type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const Defaultbutton = (props: ButtonProps) => (
  <button
    type="button"
    className={props.className}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.label}
  </button>
);

const Button = {
  Base: (props: ButtonProps) => (
    <Defaultbutton
      {...props}
      className={`text-white flex-1 px-3 py-1 rounded cursor-pointer ${props.className}`}
    />
  ),
  Add: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-blue-500 hover:bg-blue-700" />
  ),
  Cancel: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-gray-500 hover:bg-gray-700" />
  ),
  Delete: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-red-500 hover:bg-red-700" />
  ),
};

export default Button;
