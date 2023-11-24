import { LinkProperties } from '@/components/link/link.types.ts';
import { Size, Theme } from '@/types/theme.types.ts';
import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

const getLinkColor = (theme: Theme) => {
  switch (theme) {
    case 'secondary': {
      return [
        'text-zinc-400',
        'border-b-zinc-400',
        'hover:text-zinc-500',
        'hover:border-b-zinc-500',
      ];
    }
    default: {
      return [
        'text-violet-500',
        'border-b-violet-500',
        'hover:text-violet-600',
        'hover:border-b-violet-600',
      ];
    }
  }
};

const getLinkSize = (size: Size) => {
  switch (size) {
    case 'small': {
      return 'text-sm';
    }
    case 'large': {
      return 'text-lg';
    }
    default: {
      return 'text-base';
    }
  }
};

export const Link = ({
  children,
  theme = 'primary',
  size = 'medium',
  href,
  target = '_blank',
  onClick,
}: PropsWithChildren<LinkProperties>) => {
  const classes = [
    'inline-block',
    'border-b',
    getLinkSize(size),
    getLinkColor(theme),
  ];

  return (
    <a href={href} target={target} className={clsx(classes)} onClick={onClick}>
      {children}
    </a>
  );
};
