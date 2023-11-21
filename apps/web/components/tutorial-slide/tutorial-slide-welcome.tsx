import { TutorialSlideProps } from '@/components/tutorial-slide/tutorial-slide.types.ts';
import { routes } from '@/data/navigation.tsx';
import { Icon } from '@iconify/react';
import { Button, Heading, Text } from '@linkmaster/uikit';
import { Link } from 'react-router-dom';

export const TutorialSlideWelcome = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon fontSize="120px" icon="fluent-emoji:link" />
      <Heading className="mt-4">Добро пожаловать в Linkmaster!</Heading>
      <Text className="mt-3 text-center">
        Данная страница является маленьким туториалом.
      </Text>
      <Text className="mt-1 text-center">
        Давайте быстро пройдем его для того чтобы лучше ознакомиться с
        приложением
      </Text>
    </div>
  );
};

export const TutorialSlideControlWelcome = ({ onNext }: TutorialSlideProps) => {
  return (
    <div className="flex justify-between w-full">
      <Link to={routes.home.path}>
        <Button className="flex gap-2 items-center" theme="secondary">
          Нет, спасибо{' '}
          <Icon fontSize="18px" icon="fluent-emoji:hand-with-fingers-splayed" />
        </Button>
      </Link>
      <Button onClick={onNext}>Погнали!</Button>
    </div>
  );
};
