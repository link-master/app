import {Theme} from "@/types/theme.types.ts";
import clsx from "clsx";
import {PropsWithChildren} from "react";
import {HeadingLevel, HeadingProps} from './heading.types.ts';

const getHeadingLevelClasses = (level: HeadingLevel) => {
  switch(level) {
    case 2:
      return 'text-xl';
    case 3:
      return 'text-lg';
    case 4:
      return 'text-base';
    default:
      return 'text-2xl';
  }
};

const getHeadingThemeClasses = (theme: Theme) => {
  switch(theme) {
    case 'secondary':
      return 'text-slate-400';
    default:
      return 'text-slate-800';
  }
}

export const Heading = ({children, level = 1, theme = 'primary'}: PropsWithChildren<HeadingProps>) => {
  const classes: string[] = [
    getHeadingThemeClasses(theme),
    getHeadingLevelClasses(level),
  ];

  return (
    <div className={clsx(classes)}>
      {children}
    </div>
  )
};
