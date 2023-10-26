import {CardProps} from "@/components/Card/Card.types.ts";
import {Size} from "@/types/theme.types.ts";
import clsx from "clsx";
import {PropsWithChildren} from "react";

const getCardPadding = (padding: Size) => {
  switch (padding) {
    case "small":
      return 'p-4';
    case "large":
      return 'p-12';
    default:
      return 'p-8';
  }
};
export const Card = ({padding = 'medium', children, className}: PropsWithChildren<CardProps>) => {

  const classes = [
    'bg-zinc-100',
    'border-zinc-200',
    'border',
    'rounded-md',
    getCardPadding(padding),
  ];

  return (
    <div className={clsx(classes, className)}>
      {children}
    </div>
  );
};
