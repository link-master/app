import { Theme } from '@/types/theme.types';
import clsx from 'clsx';
import { useRef } from 'react';
import { SwitchProperties } from './switch.types';

const getSwitchTheme = (theme: Theme) => {
  switch (theme) {
    case 'secondary': {
      return 'bg-zinc-700';
    }
    default: {
      return 'bg-amber-500';
    }
  }
};

export const Switch = ({
  theme = 'primary',
  value = false,
  onToggle,
  disabled,
}: SwitchProperties) => {
  const checkboxReference = useRef<HTMLInputElement>(null);

  const outerClasses = [
    'relative',
    'rounded-2xl',
    'w-10',
    'bg-zinc-100',
    'border',
    'border-zinc-300',
    'h-6',
    'p-1',
  ];
  const innerClasses = [
    'rounded-full',
    'transition-all',
    'w-4',
    'h-4',
    'absolute',
    'mx-1',
    'top-1/2',
    'translate-y-[-50%]',
    getSwitchTheme(theme),
  ];

  if (value) {
    innerClasses.push('right-0');
  } else {
    innerClasses.push('left-0');
  }

  if (disabled) {
    outerClasses.push('bg-zinc-200');
    innerClasses.push('bg-zinc-300');
  }

  const onSwitchToggle = () => {
    if (disabled || !checkboxReference.current) {
      return;
    }

    checkboxReference.current.checked = !value;
    onToggle && onToggle(!value);
  };

  return (
    <div className="flex">
      <input
        ref={checkboxReference}
        className={clsx('sr-only')}
        onChange={onSwitchToggle}
        checked={value}
        type="checkbox"
      />

      <div onClick={onSwitchToggle} className={clsx(outerClasses)}>
        <div className={clsx(innerClasses)} />
      </div>
    </div>
  );
};
