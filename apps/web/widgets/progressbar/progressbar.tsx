import { PropsWithClassname } from '@/types/utils.types.ts';
import { clsx } from 'clsx';

interface ProgressbarProps {
  loading: `${number}%`;
}

export const Progressbar = ({
  className,
  loading,
}: PropsWithClassname<ProgressbarProps>) => {
  return (
    <div
      className={clsx(
        'w-full overflow-hidden bg-zinc-200 rounded-lg mb-4 h-4',
        className
      )}
    >
      <div
        style={{ width: loading }}
        className="transition-all bg-violet-500 rounded-r-md w-0 h-full"
      />
    </div>
  );
};
