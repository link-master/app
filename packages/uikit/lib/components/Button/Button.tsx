import {Size, Theme} from "@/types/theme.types.ts";
import clsx from "clsx";
import {PropsWithChildren} from "react";
import {ButtonProps} from './Button.types.ts';

const getButtonSize = (size: Size): string[] => {
  switch (size) {
    case "large":
      return ['py-4', 'px-6', 'text-lg'];
    case "small":
      return ['py-1', 'px-2', 'text-sm'];
    default:
      return ['py-2', 'px-4', 'text-base'];
  }
};

const getButtonTheme = (theme: Theme): string[] => {
  // We can't set color and then push colors into color variable (via string interpolation), 'cause Tailwind won't include our classes
  // @see: https://tailwindcss.ru/docs/content-configuration/#imena-dinamicheskih-klassov
  switch(theme) {
    case "secondary":
      return [
        'bg-slate-200',
        'hover:bg-slate-300',
        'border-slate-400',
      ];
    default:
      return [
        'bg-emerald-200',
        'hover:bg-emerald-300',
        'border-emerald-400',
      ]
  }
}

export const Button = ({theme = 'primary', size = 'medium', children, className, onClick}: PropsWithChildren<ButtonProps>) => {

  const classes = [
    'rounded-md', 'border', 'text-slate-800', 'text-base', 'select-none',
    getButtonSize(size),
    getButtonTheme(theme),
  ];

  return (
    <button
      onClick={onClick}
      className={clsx(classes, className)}
    >
      {children}
    </button>
  );
};
