import { PropsWithChildren } from 'react';

export type PropertiesWithClassname<T = unknown> = {
  className?: string | string[];
} & T;

export type ContainerComponent<T = unknown> = PropertiesWithClassname<
  PropsWithChildren<T>
>;
