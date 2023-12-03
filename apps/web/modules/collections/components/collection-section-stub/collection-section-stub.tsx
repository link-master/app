import { useAppDispatch } from '@/hooks/use-redux.ts';
import { CollectionPopup } from '@/modules/collections/components';
import {
  PopupSubmitHandler,
  useCollectionPopup,
} from '@/modules/collections/hooks';
import { addCollection } from '@/modules/collections/store';
import { SectionStub } from '@/widgets/section-stub';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const CollectionsSectionStub = () => {
  const popupControl = useCollectionPopup();
  const appDispatch = useAppDispatch();

  const handlePopupSubmit: PopupSubmitHandler = (action) => {
    popupControl.hidePopup();
    if (action.type !== 'create') {
      console.warn(
        'ЧАВО?! Ты каким образом изменяешь коллекцию не имея при этом ни одну коллекцию..'
      );
      return;
    }

    appDispatch(addCollection(action.payload));
  };
  return (
    <SectionStub className="grow">
      <Icon fontSize={120} icon="fluent-emoji:bubbles" />
      <Heading className="mt-4" level={1} theme="primary">
        Нет коллекций
      </Heading>
      <Text theme="secondary" className="mt-1">
        На данный момент у вас отсутствуют коллекции.
      </Text>
      <Text theme="secondary">
        Вы можете создать новую коллекцию с помощью кнопки внизу:
      </Text>
      <Button onClick={popupControl.showCreatePopup} className="mt-4">
        Создать коллекцию
      </Button>
      <CollectionPopup
        {...popupControl.popupInfo}
        onClose={popupControl.hidePopup}
        onSubmit={handlePopupSubmit}
      />
    </SectionStub>
  );
};
