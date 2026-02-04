import { Text } from "../input/Text";
import Dialog from "../../modals/Dialog";

interface ItemProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const CreateItemForm = ({ onConfirm, onCancel }: ItemProps) => {
  return (
    <div>
      <Dialog
        accept="Guardar"
        cancel="Cancelar"
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        <Text
          id="name"
          name="name"
          value=""
          onChange={(e) => {
            console.log(e);
          }}
        />
      </Dialog>
    </div>
  );
};

export default CreateItemForm;
