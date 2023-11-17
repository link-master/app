import {Reference} from "@/types/reference.types.ts";
import {CreateReferencePopupProps} from "./createReferencePopup.types.ts";
import {Popup, Input, Button, Heading} from "@linkmaster/uikit";
import {FormEvent, useState} from "react";

export const CreateReferencePopup = ({active, onClose, name = '', url = '', onCreated}: CreateReferencePopupProps) => {
  const root = document.getElementById('popup');

  const clearReferenceInfo = () => {
    setReferenceInfo({
      name: '',
      id: crypto.randomUUID(),
      url: '',
    });
  };

  const [referenceInfo, setReferenceInfo] = useState<Reference>({
    name,
    url,
    id: crypto.randomUUID(),
  });

  const updateReferenceInfo = (event: FormEvent<HTMLInputElement>, field: keyof Reference) => {
    const input = event.target as HTMLInputElement;
    setReferenceInfo({
      ...referenceInfo,
      [field]: input.value
    });
  }

  const onCancel = () => {
    clearReferenceInfo();
    onClose && onClose()
  };

  const onCreate = () => {
    onCreated && onCreated(referenceInfo);
    onCancel();
  };

  return (
    <Popup root={root} className="w-[520px]" active={active} onClose={onClose}>
      <Heading
        level={1}
        className="text-center"
      >
        Добавление референса
      </Heading>
      <div className="flex mt-3 flex-col gap-4">
        <Input
          className="w-full"
          value={referenceInfo.name}
          onInput={(e) => updateReferenceInfo(e, 'name')}
          placeholder="Название (опционально)"
          label="Название"
        />
        <Input
          className="w-full"
          value={referenceInfo.url}
          onInput={(e) => updateReferenceInfo(e, 'url')}
          placeholder="Ссылка на ресурс"
          label="URL*"
        />
      </div>
      <div className="flex mt-4 justify-between">
        <Button theme="secondary" onClick={onCancel}>Закрыть</Button>
        <Button onClick={onCreate}>Создать</Button>
      </div>
    </Popup>
  );
};
