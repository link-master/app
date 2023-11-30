import { AddReferenceForm } from '@/modules/references/components/add-reference-form';
import referenceSlice from '@/modules/references/store/reference-slice.ts';
import { Reference } from '@linkmaster/types';
import { Popup } from '@linkmaster/uikit';
import { FormEvent, MouseEvent } from 'react';

interface ReferencePopupProperties extends Partial<Reference.Reference> {
  active: boolean;
  onClose: () => void;
  onCreate: (reference: Reference.Reference) => void;
}

export const ReferencePopup = ({
  active,
  onClose,
  onCreate,
}: ReferencePopupProperties) => {
  // const handleHotkeys = (event: KeyboardEvent) => {
  //   event.stopPropagation();
  //   const isEnter = event.key === 'Enter';
  //   const isEscape = event.key === 'Escape';
  //
  //   if (isEnter) {
  //     handleSubmit();
  //   }
  //
  //   if (isEscape) {
  //     handleCancel();
  //   }
  // };

  const handleCancel = (
    event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event?.preventDefault();
    onClose();
  };

  const handleSubmit = (reference: Partial<Reference.Reference>) => {
    const id = `reference-${Date.now()}`;
    onCreate({
      id,
      parent: reference.parent,
      link: reference.link,
      name: reference?.name || '',
    });
    onClose();
  };

  return (
    <Popup
      active={active}
      className="w-full max-w-[420px]"
      onClose={onClose}
      root="#popup"
    >
      <AddReferenceForm
        onCancel={handleCancel}
        onSubmit={(data) => handleSubmit(data)}
      />
    </Popup>
  );
};
