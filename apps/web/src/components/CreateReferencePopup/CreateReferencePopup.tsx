import {Popup, Input, Button, Heading} from "@linkmaster/uikit";
import {FormEvent, useState} from "react";

interface CreateReferencePopupProps {
  name?: string;
  url?: string;
  active?: boolean;
  onClose?: () => void;
}

export const CreateReferencePopup = ({active, onClose, name = '', url = ''}: CreateReferencePopupProps) => {
  const [referenceUrl, setReferenceUrl] = useState(url);
  const [referenceName, setReferenceName] = useState(name);

  const onNameInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    setReferenceName(input.value);
  }

  const onURLInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    setReferenceUrl(input.value);
  }

  const root = document.getElementById('popup');

  return (
    <Popup root={root} className="w-[520px]" active={active} onClose={onClose}>
      <Heading level={1} className="text-center">Добавление референса</Heading>
      <div className="flex mt-3 flex-col gap-4">
        <Input className="w-full" onInput={onNameInput} value={referenceName} placeholder="Название (опционально)" label="Название" />
        <Input className="w-full" onInput={onURLInput} value={referenceUrl} placeholder="Ссылка на ресурс" label="URL*" />
      </div>
      <div className="flex mt-4 justify-between">
        <Button theme="secondary" onClick={onClose}>Закрыть</Button>
        <Button onClick={() => console.log(`Created! ${referenceUrl}`)}>Создать</Button>
      </div>
    </Popup>
  );
};
