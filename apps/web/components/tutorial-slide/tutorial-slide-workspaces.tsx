import { TutorialSlideProps } from '@/components/tutorial-slide/tutorial-slide.types.ts';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const TutorialSlideWorkspaces = () => {
  return (
    <div>
      <Icon fontSize="120px" className="mx-auto" icon="fluent-emoji:toolbox" />
      <Heading className="text-center mt-4">Что такое пространство?</Heading>

      <Text className="mt-4">
        <Text inline bold>
          Пространство
        </Text>{' '}
        — это то, где вы будете хранить все ваши референсы, рефы и коллекции.
        Пространства создаются в два клика и помогают отделить одну группу
        референсов и рефов от другой никак не связанной группы.
      </Text>
      <Text className="mt-2">
        Вы можете создать пространства для всех членов вашей семьи или же
        создать несколько пространств для себя: одно для работы, другое для
        хобби и третье для самореализации.
      </Text>
    </div>
  );
};
export const TutorialSlideControlWorkspaces = ({
  onNext,
  onPrevious,
}: TutorialSlideProps) => {
  return (
    <div className="flex justify-between w-full">
      <Button
        onClick={onPrevious}
        className="flex gap-2 items-center"
        theme="secondary"
      >
        Что такое рефы?
      </Button>
      <Button onClick={onNext}>Что дальше?</Button>
    </div>
  );
};
