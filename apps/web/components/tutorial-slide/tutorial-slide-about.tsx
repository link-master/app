import { TutorialSlideProps } from '@/components/tutorial-slide/tutorial-slide.types.ts';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const TutorialSlideAbout = () => {
  return (
    <div>
      <Icon
        fontSize="120px"
        className="mx-auto"
        icon="fluent-emoji:thinking-face"
      />
      <Heading className="text-center mt-4">Что такое Linkmaster?</Heading>
      <Text className="mt-4">
        <Text bold inline>
          Linkmaster
        </Text>{' '}
        — это приложение для хранения ссылочных заметок, референсов и другой
        информации.
      </Text>
      <Text className="mt-2">
        Зачастую нам негде хранить ссылки, которые мы нашли покуда серфили
        интернет: интересные статьи, видео, блоги и прочее. У многих браузеров
        (если не у всех) есть функционал закладок, однако, мы всегда забываем
        про интересные находки, ибо зачастую захламляем закладки работой/учебой,
        либо сайтами, которые посещаем регулярно.
      </Text>
    </div>
  );
};

export const TutorialSlideControlAbout = ({
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
        Стоп, назад!
      </Button>
      <Button onClick={onNext}>А зачем нужен Linkmaster?</Button>
    </div>
  );
};
