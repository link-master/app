import { TutorialSlideProps } from '@/modules/tutorial/components/tutorial-slide/tutorial-slide.types.ts';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';

export const TutorialSlideRefs = () => {
  return (
    <div>
      <Icon
        fontSize="120px"
        className="mx-auto"
        icon="fluent-emoji:pinching-hand"
      />
      <Heading className="text-center mt-4">Что такое рефы?</Heading>

      <Text className="mt-4">
        <Text inline bold>
          Рефы
        </Text>{' '}
        — это ссылки на внешние ресурсы: номера страниц книг, адреса, название
        вещей, музыка, все что угодно.
      </Text>
      <Text className="mt-2">
        Вы будете создавать специальные шаблоны, с помощью которых будете
        создавать рефы. Это нужно для того чтобы вы, например, могли легко найти
        все важные страницы в разных книгах.
      </Text>
    </div>
  );
};
export const TutorialSlideControlRefs = ({
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
        Хочу перечитать референсы
      </Button>
      <Button onClick={onNext}>Что такое пространство?</Button>
    </div>
  );
};
