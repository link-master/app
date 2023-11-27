import { ContainerProps } from '@/types/utils.types.ts';
import { clsx } from 'clsx';

export const GridList = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('grid gap-4 grid-cols-3', className)}>{children}</div>
  );
};
