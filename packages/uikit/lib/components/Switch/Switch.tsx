import {Theme} from "@/types/theme.types.ts";
import clsx from "clsx";
import {useRef} from "react";
import {SwitchProps} from './switch.types.ts';

const getSwitchTheme = (theme: Theme) => {
  switch(theme) {
    case 'secondary':
      return 'bg-zinc-700';
    default:
      return 'bg-amber-500';
  }
}


export const Switch = ({theme = 'primary', value = false, onToggle, disabled}: SwitchProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const outerClasses = ['relative', 'rounded-2xl', 'w-10', 'bg-zinc-100', 'border', 'border-zinc-300', 'h-6', 'p-1'];
  const innerClasses = [
    'rounded-full',
    'transition-all',
    'w-4',
    'h-4',
    'absolute',
    'mx-1',
    'top-1/2',
    'tranzinc-y-[-50%]',
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

  const onSwitchToggle  = () => {
    if (disabled || !checkboxRef.current) {
      return;
    }

    checkboxRef.current.checked = !value;
    onToggle && onToggle(!value);
  }

  return (
    <div className='flex'>
      <input
        ref={checkboxRef}
        className={clsx('sr-only')}
        onChange={onSwitchToggle}
        checked={value}
        type="checkbox"
      />

      <div onClick={onSwitchToggle} className={clsx(outerClasses)}>
        <div className={clsx(innerClasses)} />
      </div>
    </div>
  )
};
