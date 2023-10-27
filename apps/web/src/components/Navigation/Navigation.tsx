import {navigation} from "@/data/navigation.data.tsx";
import {Icon} from "@iconify/react";
import {clsx} from 'clsx';
import {useLocation} from "react-router-dom";
import {NavigationProps} from "./navigation.types.ts";
import {NavigationItem} from "./NavigationItem.tsx";
import {NavigationSynchronization} from "./NavigationSynchronization.tsx";

export const Navigation = ({className}: NavigationProps) => {
  const location = useLocation();

  const navigationLinks = navigation.map((item, idx) => (
    <NavigationItem active={location.pathname === item.url} href={item.url} key={idx}>
      <Icon fontSize={18} icon={item.icon} />
      {item.name}
    </NavigationItem>
  ))
  return (
    <div className="bg-white h-screen flex flex-col justify-between w-80 border-r shrink-0">
      <nav className={clsx('p-4', 'gap-2', 'flex', 'flex-col', 'w-full', className)}>
        {navigationLinks}
      </nav>
      <NavigationSynchronization />
    </div>
  );
};
