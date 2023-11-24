import {Size, Theme} from "@/types/theme.types.ts";
import clsx from "clsx";
import {PropsWithChildren} from "react";
import {TextProps} from './text.types.ts';

const getTextColor = (theme: Theme) => {
  switch(theme) {
    case "secondary":
      return 'text-zinc-400';
    default:
      return 'text-zinc-800';
  }
};

const getTextSize = (size: Size) => {
  switch(size) {
    case "small":
      return 'text-sm';
    case "large":
      return 'text-lg';
    default:
      return 'text-base';
  }
};

export const Text = ({theme = 'primary', size = 'medium', children, bold, italic, className, inline}: PropsWithChildren<TextProps>) => {

  const classes = [
    'text-base',
    getTextColor(theme),
    getTextSize(size),
    {
      'font-semibold': bold,
      italic: italic,
      'inline-block': inline,
    },
  ];

  return (
    <div className={clsx(classes, className, )}>
      {children}
    </div>
  );
};
