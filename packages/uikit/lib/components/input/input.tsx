import { clsx } from 'clsx';
import { InputProperties } from './input.types';

export const Input = ({
  value,
  onInput,
  errors,
  className,
  placeholder,
  label,
  type = 'text',
  innerRef,
  required,
  ...attributes
}: InputProperties) => {
  const classes: string[] = [
    'px-2',
    'py-1',
    'text-zinc-800',
    'placeholder-zinc-300',
    'border',
    'border-zinc-400',
    'rounded-md',
    'shadow-sm',
    'w-full',
  ];

  if (errors && errors?.length) {
    classes.push('border-red-400');
  }

  const errorList =
    errors &&
    errors?.map((item) => (
      <div key={item} className={clsx('text-red-400', 'text-sm')}>
        {item}
      </div>
    ));

  return (
    <div className={clsx(className)}>
      {label && (
        <label
          className={clsx('block text-xs text-zinc-400 mb-[2px] ml-[2px]')}
        >
          {label}
          {required && <span className="text-sm text-pink-500">*</span>}
        </label>
      )}
      <input
        {...attributes}
        required
        className={clsx(classes)}
        ref={innerRef}
        type={type}
        value={value}
        onInput={onInput}
        placeholder={placeholder}
      />
      {errorList}
    </div>
  );
};
