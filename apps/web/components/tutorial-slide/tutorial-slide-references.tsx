import { TutorialSlideProps } from '@/components/tutorial-slide/tutorial-slide.types.ts';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const TutorialSlideReferences = () => {
  return (
    <div>
      <Icon
        fontSize="120px"
        className="mx-auto"
        icon="fluent-emoji:pinched-fingers"
      />
      <Heading className="text-center mt-4">Что такое референсы?</Heading>

      <Text className="mt-4">
        <Text inline bold>
          Референсы
        </Text>{' '}
        — это все наши находки в виде ссылок. Это может быть какой-то сайт со
        статьями, сама статья, блог, вещи в онлайн-маркетах, видео со смешными
        котиками, ссылки на задачи или же туториалы.
      </Text>
      <Text className="mt-2">
        Референсы будут повсюду, именно поэтому вы можете хранить их в
        коллекциях для того чтобы сортировать все по полочкам.
      </Text>
    </div>
  );
};
export const TutorialSlideControlReferences = ({
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
        Еще раз, зачем нужен Linkmaster?
      </Button>
      <Button onClick={onNext}>Что такое рефы?</Button>
    </div>
  );
};
