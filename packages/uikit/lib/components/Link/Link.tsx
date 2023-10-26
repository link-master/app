import {LinkProps} from "@/components/Link/link.types.ts";
import {Size, Theme} from "@/types/theme.types.ts";
import {clsx} from "clsx";
import {PropsWithChildren} from "react";

const getLinkColor = (theme: Theme) => {
  switch(theme) {
    case "secondary":
      return [
        'text-slate-400',
        'border-b-slate-400',
        'hover:text-slate-500',
        'hover:border-b-slate-500',
      ];
    default:
      return [
        'text-amber-500',
        'border-b-amber-500',
        'hover:text-amber-600',
        'hover:border-b-amber-600',
      ];
  }
};

const getLinkSize = (size: Size) => {
  switch(size) {
    case "small":
      return 'text-sm';
    case "large":
      return 'text-lg';
    default:
      return 'text-base';
  }
};

export const Link = ({children, theme = 'primary', size = 'medium', href, target = '_blank'}: PropsWithChildren<LinkProps>) => {

  const classes = [
    'inline-block',
    'border-b',
    getLinkSize(size),
    getLinkColor(theme),
  ];

  return (
    <a
      href={href}
      target={target}
      className={clsx(classes)}
    >
      {children}
    </a>
  );
};
