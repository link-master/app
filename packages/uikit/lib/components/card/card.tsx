import { CardProperties } from '@/components/card/card.types.ts';
import { Size, Theme } from '@/types/theme.types.ts';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

const getCardPadding = (padding: Size) => {
  switch (padding) {
    case 'small': {
      return 'py-3 px-4';
    }
    case 'large': {
      return 'py-4 px-5';
    }
    default: {
      return 'py-5 px-6';
    }
  }
};

const getCardTheme = (theme: Theme) => {
  switch (theme) {
    case 'secondary': {
      return 'bg-zinc-100 border-zinc-200';
    }
    default: {
      return 'bg-white';
    }
  }
};
export const Card = ({
  padding = 'medium',
  theme = 'primary',
  children,
  className,
}: PropsWithChildren<CardProperties>) => {
  const classes = [
    'border',
    'rounded-md',
    'rounded-lg',
    'shadow-sm',
    getCardPadding(padding),
    getCardTheme(theme),
  ];

  return <div className={clsx(classes, className)}>{children}</div>;
};
