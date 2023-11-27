import { CollectionSectionStubProperties } from '@/modules/collections/components/collection-section-stub/collection-section-stub.types.ts';
import { SectionStub } from '@/widgets/section-stub';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const CollectionsSectionStub = ({
  onShowCreatePopup,
}: CollectionSectionStubProperties) => {
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
      <Button onClick={onShowCreatePopup} className="mt-4">
        Создать коллекцию
      </Button>
    </SectionStub>
  );
};
