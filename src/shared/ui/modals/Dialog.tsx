import Button from "../button/Button";

type PropsType = {
  children?: React.ReactNode;
  accept: string;
  cancel: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Dialog = (props: PropsType) => {
  return (
    <div className="bg-white border rounded shadow-lg mt-2">
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
