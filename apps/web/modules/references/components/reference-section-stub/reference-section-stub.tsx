import { useAppDispatch } from '@/hooks/use-redux.ts';
import { ReferencePopup } from '@/modules/references/components';
import {
  PopupSubmitHandler,
  useReferencePopup,
} from '@/modules/references/hooks';
import { addReference } from '@/modules/references/store';
import { SectionStub } from '@/widgets/section-stub';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const ReferenceSectionStub = () => {
  const popupControl = useReferencePopup();
  const appDispatch = useAppDispatch();

  const handlePopupSubmit: PopupSubmitHandler = (action) => {
    popupControl.hidePopup();
    if (action.type !== 'create') {
      console.warn(
        'ЧАВО?! Ты каким образом изменяешь коллекцию не имея при этом ни одну коллекцию..'
      );
      return;
    }

    appDispatch(addReference(action.payload));
  };
  return (
    <SectionStub className="grow">
      <Icon fontSize={120} icon="fluent-emoji:sad-but-relieved-face" />
      <Heading className="mt-4" level={1} theme="primary">
        Нет референсов
      </Heading>
      <Text theme="secondary" className="mt-1">
        На данный момент у вас отсутствуют референсы
      </Text>
      <Text theme="secondary">
        Вы можете создать новый референс с помощью кнопки внизу:
      </Text>
      <Button onClick={popupControl.showCreatePopup} className="mt-4">
        Создать референс
      </Button>
      <ReferencePopup
        {...popupControl.popupInfo}
        onClose={popupControl.hidePopup}
        onSubmit={handlePopupSubmit}
      />
    </SectionStub>
  );
};
