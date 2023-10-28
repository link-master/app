import {CreateRefPopupProps} from "./createRefPopup.types.ts";
import {Button, Heading, Popup} from "@linkmaster/uikit";

export const CreateRefPopup = ({onClose, active}: CreateRefPopupProps) => {
  return (
    <Popup active={active} onClose={onClose}>
      <Heading level={1} className="text-center">Добавление рефа</Heading>
      <div className="flex mt-3 flex-col gap-4">
      </div>
      <div className="flex mt-4 justify-between">
        <Button theme="secondary" onClick={onClose}>Закрыть</Button>
        <Button onClick={() => console.log('Ok!')}>Создать</Button>
      </div>
    </Popup>
  );
};
