import {clsx} from 'clsx';
import {InputProps} from './input.types.ts';

export const Input = (
  {
    value,
    onInput,
    errors,
    className,
    placeholder,
    label,
    type = 'text'
  }: InputProps) => {

  const classes: string[] = [
    'font-sans',
    'px-2',
    'py-1',
    'text-base',
    'text-zinc-800',
    'font-normal',
    'placeholder-zinc-300',
    'border',
    'border-zinc-400',
    'rounded-md',
    'outline-none',
    'shadow-sm',
    'sm:text-sm'
  ];

  if (errors?.length) {
    classes.push('border-red-400');
  }

  const errorList = errors?.map(item => (
    <div key={item} className={clsx('text-red-400', 'text-sm')}>{item}</div>
  ));

  return (
    <div>
      {label && <label className={clsx('block text-xs text-zinc-400 mb-[2px] ml-[2px]')}>{label}</label>}
      <input
        className={clsx(classes, className)}
        type={type}
        value={value}
        onInput={onInput}
        placeholder={placeholder}
      />
      {errorList}
    </div>
  )
};
