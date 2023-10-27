import {NavigationItem} from "@/components/Navigation/NavigationItem.tsx";
import {navigation} from "@/data/navigation.data.ts";
import {Icon} from "@iconify/react";
import {clsx} from 'clsx';
import {NavigationProps} from "./navigation.types.ts";

export const Navigation = ({className}: NavigationProps) => {
  const currentUrl = location.pathname;

  const navigationLinks = navigation.map((item, idx) => (
    <NavigationItem active={currentUrl === item.url} href={item.url} key={idx}>
      <Icon fontSize={18} icon={item.icon} />
      {item.name}
    </NavigationItem>
  ))
  return (
    <nav className={clsx('h-screen', 'p-4', 'gap-2', 'flex', 'flex-col', 'w-80', 'bg-white', 'border-r', 'shrink-0', className)}>
      {navigationLinks}
    </nav>
  );
};
