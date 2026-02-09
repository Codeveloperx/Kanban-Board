import { useEffect, useRef } from "react";
import Button from "../button/Button";
import { X } from "lucide-react";

type PropsType = {
  children?: React.ReactNode;
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

  return (
    <div
      ref={ref}
      className="bg-white border border-zinc-300 rounded shadow-lg"
    >
      <div className="flex flex-col">
        <div className="w-auto bg-zinc-700 border-b rounded-t-sm border-b-zinc-100 flex justify-end">
          <Button className="text-white" onClick={props.onCancel}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {props.children}
      </div>
    </div>
  );
};

export default Dialog;
