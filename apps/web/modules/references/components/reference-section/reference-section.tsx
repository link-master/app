import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts';
import { Reference, ReferencePopup } from '@/modules/references/components';
import {
  useReferencePopup,
  PopupSubmitHandler,
} from '@/modules/references/hooks';
import {
  addReference,
  removeReference,
  updateReference,
  selectReferences,
} from '@/modules/references/store';
import { CommonType } from '@linkmaster/types';
import { GridList } from '@/widgets/grid-list';
import { Button } from '@linkmaster/uikit';
import { useState } from 'react';

export const ReferenceSection = () => {
  const references = useAppSelector(selectReferences);
  const appDispatch = useAppDispatch();

  const popupControl = useReferencePopup();
  const [activeReferenceId, setActiveReferenceId] =
    useState<CommonType.Identificator | null>(null);

  // Handlers
  const changeReference = (id: CommonType.Identificator) => {
    setActiveReferenceId(id);
    popupControl.showChangePopup(id);
  };

  const handleDelete = (id: CommonType.Identificator) => {
    appDispatch(removeReference(id));
  };

  const handlePopupSubmit: PopupSubmitHandler = (action) => {
    popupControl.hidePopup();
    if (action.type === 'change') {
      appDispatch(
        updateReference({
          id: activeReferenceId,
          ...action.payload,
        })
      );
      setActiveReferenceId(null);
    } else if (action.type === 'create') {
      appDispatch(addReference(action.payload));
    }
  };

  const referenceList = references.map((reference) => (
    <Reference
      onChange={changeReference}
      onDelete={handleDelete}
      key={reference.id}
      {...reference}
    />
  ));

  return (
    <div className="grow p-4">
      <GridList>{referenceList}</GridList>
      <ReferencePopup
        {...popupControl.popupInfo}
        onClose={popupControl.hidePopup}
        onSubmit={handlePopupSubmit}
      />
      <Button
        size="small"
        className="fixed bottom-4 right-4"
        onClick={popupControl.showCreatePopup}
      >
        Добавить референс
      </Button>
    </div>
  );
};
