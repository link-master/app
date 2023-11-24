import { Theme } from '@/types/theme.types.ts';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { HeadingLevel, HeadingProperties } from './heading.types.ts';

const getHeadingLevel = (level: HeadingLevel) => {
  switch (level) {
    case 2: {
      return 'text-xl font-bold';
    }
    case 3: {
      return 'text-lg font-semibold';
    }
    case 4: {
      return 'text-base font-semibold';
    }
    default: {
      return 'text-2xl font-bold';
    }
  }
};

const getHeadingTheme = (theme: Theme) => {
  switch (theme) {
    case 'secondary': {
      return 'text-zinc-400';
    }
    default: {
      return 'text-zinc-800';
    }
  }
};

export const Heading = ({
  children,
  level = 1,
  theme = 'primary',
  className,
}: PropsWithChildren<HeadingProperties>) => {
  const classes: string[] = [getHeadingTheme(theme), getHeadingLevel(level)];

  return <div className={clsx(classes, className)}>{children}</div>;
};
