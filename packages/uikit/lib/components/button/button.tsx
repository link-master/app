import { Size, Theme } from '@/types/theme.types';
import clsx from 'clsx';
import { MouseEvent, PropsWithChildren } from 'react';
import { ButtonProperties } from './button.types';

const getButtonSize = (size: Size): string[] => {
  switch (size) {
    case 'large': {
      return ['py-4', 'px-6', 'text-lg'];
    }
    case 'small': {
      return ['py-1', 'px-2', 'text-sm'];
    }
    default: {
      return ['py-2', 'px-4', 'text-base'];
    }
  }
};

const getButtonTheme = (theme: Theme, isDisabled?: boolean): string[] => {
  // We can't set color and then push colors into color variable (via string interpolation), 'cause Tailwind won't include our classes
  // @see: https://tailwindcss.ru/docs/content-configuration/#imena-dinamicheskih-klassov
  const classList = [];
  switch (theme) {
    case 'secondary': {
      classList.push(
        'bg-zinc-100',
        'hover:bg-zinc-200',
        'border-zinc-300',
        'text-zinc-800'
      );
      break;
    }
    default: {
      classList.push(
        'bg-zinc-700',
        'hover:bg-zinc-600',
        'border-zinc-500',
        'text-zinc-100'
      );
    }
  }

  if (isDisabled) {
    classList.push('bg-zinc-300');
  }

  return classList;
};

export const Button = ({
  theme = 'primary',
  size = 'medium',
  children,
  disabled,
  className,
  onClick,
  ...attributes
}: PropsWithChildren<ButtonProperties>) => {
  const classes = [
    'rounded-md',
    'border',
    'font-medium',
    'text-base',
    'select-none',
    'block',
    getButtonSize(size),
    getButtonTheme(theme, disabled),
  ];

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    onClick && onClick(event);
  };

  return (
    <button
      {...attributes}
      onClick={handleClick}
      className={clsx(...classes, className)}
    >
      {children}
    </button>
  );
};
