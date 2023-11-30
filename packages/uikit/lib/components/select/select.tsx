import { SelectOption, SelectProperties } from './select.types';
import { clsx } from 'clsx';
import { forwardRef, useState } from 'react';

// eslint-disable-next-line react/display-name
export const Select = forwardRef<HTMLDivElement, SelectProperties>(
  function Select(
    { options, value, className, label, required, onChange, ...attributes },
    reference
  ) {
    const [isActive, setIsActive] = useState(false);
    const currentOption: SelectOption | null =
      options.find((option) => option.value === value?.value) ??
      options[0] ??
      null;

    const toggleActive = () => {
      setIsActive((isActive) => !isActive);
    };

    const getListKey = (index: number, value: string): string => {
      let uniqueKey = attributes['name'] || attributes['id'] || '';
      uniqueKey &&= uniqueKey + '-';

      return `${uniqueKey}${index}-${value}`;
    };

    const handleSelectOption = (option: SelectOption) => {
      onChange(option);
      toggleActive();
    };

    const optionsList = options.map((item, index) => (
      <div
        onClick={() => handleSelectOption(item)}
        className="hover:bg-zinc-100 rounded-md px-2 py-1"
        key={getListKey(index, item.value)}
        data-value={item.value}
      >
        {item?.text}
      </div>
    ));

    return (
      <div className={className}>
        {label && (
          <label
            className={clsx('block text-xs text-zinc-400 mb-[2px] ml-[2px]')}
          >
            {label}
            {required && <span className="text-sm text-pink-500">*</span>}
          </label>
        )}
        <div
          className={clsx(
            'select-none cursor-pointer bg-white relative px-2 py-1 border border-zinc-400 text-zinc-800 rounded-md shadow-sm w-full placeholder-zinc-300'
          )}
        >
          <div ref={reference} onClick={toggleActive}>
            {currentOption?.text ?? '---'}
          </div>
          {isActive && (
            <div className="absolute px-2 py-2 top-full left-1/2 -translate-x-1/2  bg-white mt-2 border rounded-md shadow-sm w-full border-zinc-400 text-zinc-800">
              {optionsList}
            </div>
          )}
        </div>
      </div>
    );
    // return (
    //   <Card
    //     theme="primary"
    //     className={clsx('!py-2 !px-4 w-full relative', className)}
    //   >
    //     {dispayedValue}
    //     {isActive && optionsList}
    //   </Card>
    // );
  }
);
