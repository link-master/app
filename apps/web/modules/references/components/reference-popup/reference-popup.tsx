import { AddReferenceForm } from '@/modules/references/components/add-reference-form';
import { Reference } from '@linkmaster/types';
import { Popup } from '@linkmaster/uikit';

interface ReferencePopupProperties extends Partial<Reference.Reference> {
  active: boolean;
  onClose: () => void;
  onSubmit: (reference: Reference.Reference) => void;
}

export const ReferencePopup = ({
  active,
  onClose,
  onSubmit,
  link,
  name,
  parent,
}: ReferencePopupProperties) => {
  const providedReference: Omit<Reference.Reference, 'id'> = {
    link,
    name: name!,
    parent,
  };

  const handleSubmit = (reference: Partial<Reference.Reference>) => {
    const id = `reference-${Date.now()}`;
    onSubmit({
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
        defaults={providedReference}
        onCancel={onClose}
        onSubmit={handleSubmit}
      />
    </Popup>
  );
};
