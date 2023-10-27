import {Popup, Input, Button, Heading} from "@linkmaster/uikit";
import {FormEvent, useState} from "react";

interface CreateReferencePopupProps {
  active?: boolean;
  onClose?: () => void;
}

export const CreateReferencePopup = ({active, onClose}: CreateReferencePopupProps) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const onNameInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    setName(input.value);
  }

  const onURLInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    setUrl(input.value);
  }

  const root = document.getElementById('popup');

  return (
    <Popup root={root} className="w-[520px]" active={active} onClose={onClose}>
      <Heading level={1} className="text-center">Добавление референса</Heading>
      <div className="flex mt-3 flex-col gap-4">
        <Input className="w-full" onInput={onNameInput} value={name} placeholder="Название (опционально)" label="Название" />
        <Input className="w-full" onInput={onURLInput} value={url} placeholder="Ссылка на ресурс" label="URL*" />
      </div>
      <div className="flex mt-4 justify-between">
        <Button theme="secondary" onClick={onClose}>Закрыть</Button>
        <Button onClick={() => console.log(`Created! ${url}`)}>Создать</Button>
      </div>
    </Popup>
  );
};
