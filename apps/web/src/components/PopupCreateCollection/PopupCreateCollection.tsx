import {Collection} from "@/types/collection.types.ts";
import {FormEvent, useState} from "react";
import {PopupCreateCollectionProps} from "./popupCreateCollection.types.ts";
import {Popup, Heading, Text, Button, Input} from "@linkmaster/uikit";

export const PopupCreateCollection = ({active, onClose, onCreated}: PopupCreateCollectionProps) => {

  const root = document.getElementById('popup');

  const clearCollectionInfo = () => {
    setCollectionInfo({
      name: '',
      description: '',
      content: [],
      id: crypto.randomUUID(),
    });
  };

  const [collectionInfo, setCollectionInfo] = useState<Collection>({
    name: '',
    description: '',
    content: [],
    id: crypto.randomUUID(),
  });

  const updateCollectionInfo = (event: FormEvent<HTMLInputElement>, field: keyof Collection) => {
    const input = event.target as HTMLInputElement;
    setCollectionInfo({
      ...collectionInfo,
      [field]: input.value
    });
  }

  const onCancel = () => {
    clearCollectionInfo();
    onClose && onClose()
  };

  const onCreate = () => {
    onCreated && onCreated(collectionInfo);
    onCancel();
  };

  return (
    <Popup root={root} className="w-[520px]" active={active} onClose={onCancel}>
      <Heading level={1} className="text-center">Добавление коллекции</Heading>
      <div className="flex mt-3 flex-col gap-4">
        <Input
          value={collectionInfo.name}
          onInput={(e) => updateCollectionInfo(e, 'name')}
          label="Название"
        />
        <Input
          value={collectionInfo.description}
          onInput={(e) => updateCollectionInfo(e, 'description')}
          label="Описание"
        />
        <Text>Тут будет цвет и иконка</Text>
      </div>
      <div className="flex justify-between items-start">
        <Button onClick={onCancel}>
          Отмена
        </Button>
        <Button onClick={onCreate}>
          Создать
        </Button>
      </div>
    </Popup>
  );
};
