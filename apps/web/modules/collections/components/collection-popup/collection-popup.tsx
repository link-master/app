import { CollectionForm } from '@/modules/collections/components';
import {
  PopupSubmitHandler,
  PopupInfoState,
} from '@/modules/collections/hooks';
import { CollectionType } from '@linkmaster/types';
import { Popup, Heading } from '@linkmaster/uikit';

type CollectionPopupProperties = PopupInfoState & {
  onClose: () => void;
  onSubmit: PopupSubmitHandler;
};

export const CollectionPopup = ({
  type,
  payload,
  onSubmit,
  onClose,
}: CollectionPopupProperties) => {
  const title =
    type === 'create' ? 'Создание коллекции' : 'Изменение коллекции';
  const isActive = type !== 'hidden';
  const submitText = type === 'create' ? 'Создать' : 'Изменить';

  const handleSubmit = (fields: CollectionType.CollectionFields) => {
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
      <CollectionForm
        onClose={onClose}
        submitText={submitText}
        onSubmit={handleSubmit}
        initial={payload}
      />
    </Popup>
  );
};
