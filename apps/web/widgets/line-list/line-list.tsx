import { ContainerProps } from '@/types/utils.types.ts';
import { clsx } from 'clsx';

export const LineList = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('flex flex-col gap-4', className)}>{children}</div>
  );
};
