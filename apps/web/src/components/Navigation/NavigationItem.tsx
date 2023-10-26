import {clsx} from "clsx";
import {NavigationItemsProps} from "./navigation.types.ts";
import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";

export const NavigationItem = ({active, children, href}: PropsWithChildren<NavigationItemsProps>) => {
  const color = active ? 'bg-zinc-300' : 'bg-zinc-100 hover:bg-zinc-200';
  return (
    <Link
      className={clsx('flex', 'gap-2', 'items-center', 'rounded-md', 'px-4', 'py-2', color)}
      to={href}
    >
      {children}
    </Link>
  );
};
