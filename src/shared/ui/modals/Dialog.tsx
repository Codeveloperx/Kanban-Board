import { useEffect, useRef } from "react";
import Button from "../button/Button";

type PropsType = {
  children?: React.ReactNode;
  accept: string;
  cancel: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Dialog = (props: PropsType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target as Node)) {
        props.onCancel();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [props.onCancel]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") props.onCancel();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [props.onCancel]);

  return (
    <div ref={ref} className="bg-white border rounded shadow-lg mt-2">
      {props.children}
      <div className="flex gap-2 py-2 px-4">
        <Button variant="primary" onClick={props.onConfirm}>
          {props.accept}
        </Button>
        <Button variant="secondary" onClick={props.onCancel}>
          {props.cancel}
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
