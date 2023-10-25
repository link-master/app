import clsx from "clsx";
import {PropsWithChildren} from "react";
import {ButtonProps} from './Button.types.ts';

export const Button = ({theme, children}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={clsx('button', 'px-4', 'text-red-700', theme)}>
      {children}
    </button>
  );
};
