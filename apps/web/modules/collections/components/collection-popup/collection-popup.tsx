import { useAppSelector } from '@/hooks/useRedux.ts';
import { selectCollection } from '@/modules/collections/store';
import { Collection } from '@/types/collection.types.ts';
import { FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { CreateCollectionPopupProperties } from './collection-popup.types.ts';
import { Popup, Heading, Input, Button } from '@linkmaster/uikit';

export const CollectionPopup = ({
  onClose,
  active,
  onSubmit,
  title = 'Создание коллекции',
  collectionId = null,
}: CreateCollectionPopupProperties) => {
  const nameInputReference = useRef<HTMLInputElement>(null);
  const descriptionInputReference = useRef<HTMLInputElement>(null);

  const collections = useAppSelector(selectCollection);
  const [form, setForm] = useState<Collection>({
    name: '',
    description: '',
    id: '',
    items: [],
  });

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    const id = Date.now().toString();
    onSubmit({ ...form, id });
  };

  const handleCancel = (event?: MouseEvent) => {
    event?.preventDefault();
    setForm({
      name: '',
      description: '',
      id: '',
      items: [],
    });

    onClose();
  };

  // If collectionId is provided fetch it fields into inputs
  useEffect(() => {
    const foundCollection = collections.find(
      (item) => item.id === collectionId
    );

    if (!foundCollection) {
      return;
    }

    setForm(foundCollection);

    if (nameInputReference.current)
      nameInputReference.current.value = foundCollection.name;

    if (descriptionInputReference.current)
      descriptionInputReference.current.value = foundCollection.description;
  }, [collectionId, collections]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    if (!input) {
      return;
    }

    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  return (
    <Popup
      className="w-full max-w-[420px]"
      active={active}
      onClose={handleCancel}
      root="#popup"
    >
      <Heading level={3}>{title}</Heading>
      <form>
        <Input
          className="mt-2"
          required
          onInput={handleInput}
          label="Название"
          name="name"
          innerRef={nameInputReference}
        />
        <Input
          className="mt-2"
          onInput={handleInput}
          label="Описание"
          name="description"
          innerRef={descriptionInputReference}
        />
        <div className="flex mt-4 justify-between gap-4">
          <Button onClick={handleCancel} theme="secondary">
            Отменить
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Создать
          </Button>
        </div>
      </form>
    </Popup>
  );
};
