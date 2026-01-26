type ButtonProps = {
  label?: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

const Defaultbutton = (props: ButtonProps) => (
  <button
    type="button"
    className={`${props.className} flex-1 rounded px-3 py-1 cursor-pointer transition-colors`}
    onClick={props.onClick}
    disabled={props.disabled}
    aria-label={props.ariaLabel}
  >
    {props.label}
  </button>
);

export const Button = {
  Base: (props: ButtonProps) => (
    <Defaultbutton {...props} className={` ${props.className}`} />
  ),
  Primary: (props: ButtonProps) => (
    <Defaultbutton
      {...props}
      className="h-10 rounded-md bg-zinc-700 font-medium text-white hover:bg-zinc-900"
    />
  ),
  Secondary: (props: ButtonProps) => (
    <Defaultbutton
      {...props}
      className="h-10 rounded-md border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    />
  ),
  Delete: (props: ButtonProps) => (
    <Defaultbutton {...props} className="bg-red-500 hover:bg-red-700" />
  ),
};
