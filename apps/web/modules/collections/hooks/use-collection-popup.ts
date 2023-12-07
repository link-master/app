import { CollectionType } from '@linkmaster/types';
import { useAppSelector } from '@/hooks/use-redux.ts';
import { selectCollection } from '@/modules/collections/store';
import { useState } from 'react';

const useCollectionPopup = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInfoState>({
    type: 'hidden',
    payload: null,
  });
  const collections = useAppSelector(selectCollection);

  const hidePopup = () => {
    setPopupInfo({
      type: 'hidden',
      payload: null,
    });
  };

  const showCreatePopup = () => {
    setPopupInfo({
      type: 'create',
      payload: null,
    });
  };

  const showChangePopup = (id: CollectionType.Collection['id']) => {
    const collection = collections.find((collection) => collection.id === id);

    if (!collection) {
      throw new Error('No such collection!');
    }

    setPopupInfo({
      type: 'change',
      payload: collection,
    });
  };

  return {
    popupInfo,
    hidePopup,
    showChangePopup,
    showCreatePopup,
  };
};

interface PopupInfoActionCreate {
  type: 'create';
  payload: null;
}

interface PopupInfoActionChange {
  type: 'change';
  payload: CollectionType.CollectionFields;
}

interface PopupInfoActionHide {
  type: 'hidden';
  payload: null;
}

export type PopupInfoState =
  | PopupInfoActionCreate
  | PopupInfoActionChange
  | PopupInfoActionHide;

export type PopupSubmitHandler = (info: {
  type: PopupInfoState['type'];
  payload: CollectionType.CollectionFields;
}) => void;

export { useCollectionPopup };
