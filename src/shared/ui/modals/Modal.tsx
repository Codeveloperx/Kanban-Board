import { X } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";

type PropsType = {
  title: string;
  onClose: () => void;
  onConfirm: () => void;
  textCancel?: string;
  textConfirm?: string;
  children: React.ReactNode;
};

const Modal = (props: PropsType) => {
  const {
    textCancel = "Cancelar",
    textConfirm = "Guardar",
    title,
    onClose,
    onConfirm,
    children,
  } = props;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-96 p-4 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-medium">{title}</h1>
          <button
            onClick={props.onClose}
            className="cursor-pointer top-2 right-4 text-gray-500 hover:text-black"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
        <div className="flex items-center justify-end gap-2 px-4 py-2">
          <Button variant="primary" onClick={onConfirm}>
            {textConfirm}
          </Button>
          <Button variant="secondary" onClick={onClose}>
            {textCancel}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
