import { clsx } from 'clsx';
import { NavigationItemsProperties } from './navigation.types.ts';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export const NavigationItem = ({
  active,
  children,
  href,
}: PropsWithChildren<NavigationItemsProperties>) => {
  const color = active ? 'bg-zinc-200' : 'hover:bg-zinc-100';
  return (
    <Link
      className={clsx(
        'flex',
        'gap-2',
        'items-center',
        'transition-colors',
        'rounded-md',
        'px-4',
        'py-2',
        color
      )}
      to={href}
    >
      {children}
    </Link>
  );
};
