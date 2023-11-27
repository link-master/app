import { ContainerProps } from '@/types/utils.types.ts';
import { clsx } from 'clsx';

export const SectionStub = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center h-full w-full',
        className
      )}
    >
      {children}
    </div>
  );
};
