type TextProps = {
  id: string;
  className?: string;
  name: string;
  placeholder?: string;
  value: string;
  inputRef?: (element: HTMLInputElement | null) => void;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onBlur?: () => void;
};

export const Text = (props: TextProps) => {
  const { value = "" } = props;
  const className = props.className || "border p-2 rounded";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <input
      ref={props.inputRef}
      id={props.id}
      name={props.name}
      type="text"
      className={className}
      placeholder={props.placeholder}
      value={value}
      onKeyDown={props.onKeyDown}
      onChange={onChange}
      onBlur={props.onBlur}
    />
  );
};
