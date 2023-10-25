import {Size, Theme} from "@/types/theme.types.ts";
import clsx from "clsx";
import {PropsWithChildren} from "react";
import {TextProps} from './Text.types.ts';

const getTextColor = (theme: Theme) => {
  switch(theme) {
    case "secondary":
      return 'text-slate-400';
    default:
      return 'text-slate-800';
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

export const Text = ({theme = 'primary', size = 'medium', children, className}: PropsWithChildren<TextProps>) => {

  const classes = [
    'text-base',
    getTextColor(theme),
    getTextSize(size),
  ];

  return (
    <div className={clsx(classes, className)}>
      {children}
    </div>
  );
};
