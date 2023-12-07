import { selectReferences } from '@/modules/references/store';
import { ReferenceType, CommonType } from '@linkmaster/types';
import { useAppSelector } from '@/hooks/use-redux.ts';
import { useState } from 'react';

const useReferencePopup = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInfoState>({
    type: 'hidden',
    payload: null,
  });
  const references = useAppSelector(selectReferences);

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

  const showChangePopup = (id: CommonType.Identificator) => {
    const collection = references.find((collection) => collection.id === id);

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
  payload: ReferenceType.ReferenceFields;
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
  payload: ReferenceType.ReferenceFields;
}) => void;

export { useReferencePopup };
