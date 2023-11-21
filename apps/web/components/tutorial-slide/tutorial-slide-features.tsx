import { TutorialSlideProps } from '@/components/tutorial-slide/tutorial-slide.types.ts';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const TutorialSlideFeatures = () => {
  return (
    <div>
      <Icon fontSize="120px" className="mx-auto" icon="fluent-emoji:t-rex" />
      <Heading className="text-center mt-4">Зачем нужен Linkmaster?</Heading>

      <Text className="mt-4">— Сохранять ссылки на разные ресурсы</Text>
      <Text className="mt-1">
        — Создавать отдельные{' '}
        <Text bold inline>
          пространства
        </Text>{' '}
        для своих находок;
      </Text>
      <Text className="mt-1">
        — Создавать{' '}
        <Text bold inline>
          коллекции
        </Text>{' '}
        внутри пространств для сортировки находок;
      </Text>
      <Text className="mt-1">
        — Хранить в Linkmaster ссылки для рабочих ресурсов, ресурсов для
        обучения;
      </Text>
      <Text className="mt-1">
        — Делиться списками ресурсов с другими людьми;
      </Text>
      <Text className="mt-1">
        — Создавать ссылки на книги, фильмы и видео с подробными полями
        <br /> (параграфы, таймкоды, все это можно настроить);
      </Text>
    </div>
  );
};
export const TutorialSlideControlFeatures = ({
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
        Еще раз, что такое Linkmaster?
      </Button>
      <Button onClick={onNext}>Что такое референсы?</Button>
    </div>
  );
};
