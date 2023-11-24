import { Size, Theme } from '@/types/theme.types.ts';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ButtonProperties } from './button.types.ts';

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

const getButtonTheme = (theme: Theme): string[] => {
  // We can't set color and then push colors into color variable (via string interpolation), 'cause Tailwind won't include our classes
  // @see: https://tailwindcss.ru/docs/content-configuration/#imena-dinamicheskih-klassov
  switch (theme) {
    case 'secondary': {
      return [
        'bg-zinc-100',
        'hover:bg-zinc-200',
        'border-zinc-300',
        'text-zinc-800',
      ];
    }
    default: {
      return [
        'bg-zinc-700',
        'hover:bg-zinc-600',
        'border-zinc-500',
        'text-zinc-100',
      ];
    }
  }
};

export const Button = ({
  theme = 'primary',
  size = 'medium',
  children,
  className,
  onClick,
}: PropsWithChildren<ButtonProperties>) => {
  const classes = [
    'rounded-md',
    'border',
    'font-medium',
    'text-base',
    'select-none',
    'block',
    getButtonSize(size),
    getButtonTheme(theme),
  ];

  return (
    <button
      onClick={(event) => onClick && onClick(event)}
      className={clsx(classes, className)}
    >
      {children}
    </button>
  );
};
