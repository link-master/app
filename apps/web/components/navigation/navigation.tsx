import { navigation } from '@/data/navigation.tsx';
import { Sidebar } from '@/widgets/sidebar';
import { Icon } from '@iconify/react';
import { clsx } from 'clsx';
import { useLocation } from 'react-router-dom';
import { NavigationProps } from './navigation.types.ts';
import { NavigationItem } from './navigation-item.tsx';
import { NavigationSynchronization } from './navigation-synchronization.tsx';

export const Navigation = ({ className }: NavigationProps) => {
  const location = useLocation();

  const navigationLinks = navigation.map((item, idx) => (
    <NavigationItem
      active={location.pathname === item.url}
      href={item.url}
      key={idx}
    >
      <Icon fontSize={18} icon={item.icon} />
      {item.name}
    </NavigationItem>
  ));

  return (
    <Sidebar className="max-w-[600px] min-w-[256px]" resizeable>
      <nav
        className={clsx(
          'p-4',
          'gap-2',
          'flex',
          'flex-col',
          'w-full',
          className
        )}
      >
        {navigationLinks}
      </nav>
      <NavigationSynchronization />
    </Sidebar>
  );
};
