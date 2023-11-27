import { SectionStub } from '@/widgets/section-stub';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

interface ReferencesSectionStubProps {
  onShowCreatePopup: () => void;
}

export const ReferencesSectionStub = ({
  onShowCreatePopup,
}: ReferencesSectionStubProps) => {
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
      <Button onClick={onShowCreatePopup} className="mt-4">
        Создать референс
      </Button>
    </SectionStub>
  );
};
