import { PropsWithChildren } from 'react';

export type PropsWithClassname<T = unknown> = {
  className?: string | string[];
} & T;

export type ContainerProps<T = unknown> = PropsWithClassname<
  PropsWithChildren<T>
>;
