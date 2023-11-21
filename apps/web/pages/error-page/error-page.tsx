import { Icon } from '@iconify/react';
import { Button, Heading } from '@linkmaster/uikit';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Icon fontSize="156px" icon="fluent-emoji:skull" />
      <Heading className="mt-4">Произошла ошибка!</Heading>
      <div className="flex items-center flex-col gap-3 mt-8">
        <Link to="/">
          <Button>Перейти к домашней странице</Button>
        </Link>
        <Button
          onClick={() => window.location.reload()}
          className="w-fit"
          theme="secondary"
        >
          Перезагрузить страницу
        </Button>
      </div>
    </div>
  );
};
