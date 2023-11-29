import { TutorialSlideProps } from '@/modules/tutorial/components/tutorial-slide/tutorial-slide.types.ts';
import { routes } from '@/data/navigation.tsx';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';
import { Link } from 'react-router-dom';

export const TutorialSlideFinal = () => {
  return (
    <div>
      <Icon fontSize="120px" className="mx-auto" icon="fluent-emoji:shark" />
      <Heading className="text-center mt-4">Можно серфить!</Heading>

      <Text className="mt-4">
        Теперь, когда вы выучили все основы пользования Linkmaster - вы можете
        добавить первые ссылки и создать первые коллекции.
      </Text>
      <Text className="mt-4">
        Вы также можете заново пройти туториал просто нажав на кнопку "Гайд" в
        настройках.
      </Text>
    </div>
  );
};
export const TutorialSlideControlFinal = ({
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
        Хочу еще почитать о пространствах
      </Button>
      <Link to={routes.home.path}>
        <Button className="flex gap-2" onClick={onNext}>
          Вперед серфить
          <Icon fontSize={22} icon="fluent-emoji:person-surfing" />
        </Button>
      </Link>
    </div>
  );
};
