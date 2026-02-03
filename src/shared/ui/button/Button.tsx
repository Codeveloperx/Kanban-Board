import { buttonVariants } from "@/shared/utils";
import clsx from "clsx";

type ButtonVariant = "base" | "primary" | "secondary" | "delete" | "add";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  variant?: ButtonVariant;
};

const Button = ({ variant = "base", ...props }: ButtonProps) => {
  const classsStyle = `flex items-center justify-center
      rounded transition-colors px-4 py-2 cursor-pointer
      disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <button
      type="button"
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      className={clsx(classsStyle, buttonVariants[variant], props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
