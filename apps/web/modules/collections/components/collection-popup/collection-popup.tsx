import { useAppSelector } from '@/hooks/use-redux.ts';
import { AddCollectionForm } from '@/modules/collections/components/add-collection-form';
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

  return (
    <Popup
      className="w-full max-w-[420px]"
      active={active}
      onClose={handleCancel}
      root="#popup"
    >
      <Heading level={3}>{title}</Heading>
      <AddCollectionForm />
    </Popup>
  );
};
