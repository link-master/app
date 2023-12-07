import { ReferenceForm } from '@/modules/references/components';
import { PopupSubmitHandler, PopupInfoState } from '@/modules/references/hooks';
import { ReferenceType } from '@linkmaster/types';
import { Popup, Heading } from '@linkmaster/uikit';

type ReferencePopupProperties = PopupInfoState & {
  onClose: () => void;
  onSubmit: PopupSubmitHandler;
};

export const ReferencePopup = ({
  type,
  payload,
  onSubmit,
  onClose,
}: ReferencePopupProperties) => {
  const title =
    type === 'create' ? 'Создание референса' : 'Изменение референса';
  const isActive = type !== 'hidden';
  const submitText = type === 'create' ? 'Создать' : 'Изменить';

  const handleSubmit = (fields: ReferenceType.ReferenceFields) => {
    onSubmit({
      type,
      payload: fields,
    });
  };

  return (
    <Popup
      className="w-full max-w-[420px]"
      active={isActive}
      onClose={onClose}
      root="#popup"
    >
      <Heading level={3}>{title}</Heading>
      <ReferenceForm
        onClose={onClose}
        submitText={submitText}
        onSubmit={handleSubmit}
        initial={payload}
      />
    </Popup>
  );
};
