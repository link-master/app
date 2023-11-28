import { Card } from '@/components/card';
import { Text } from '@/components/text';
import { SelectOption, SelectProperties } from './select.types';
import { clsx } from 'clsx';
import { useState } from 'react';

export const Select = ({
  options,
  value,
  className,
  placeholder,
  onChange,
}: SelectProperties) => {
  const [isActive, setIsActive] = useState(false);
  const currentOption = options.find((option) => option.id === value);

  const toggleActive = () => {
    setIsActive((isActive) => !isActive);
    console.log({ isActive });
  };

  const dispayedValue = (
    <div onClick={toggleActive}>
      {currentOption?.text ? (
        <div>{currentOption?.text}</div>
      ) : (
        <div className="text-zinc-500">{placeholder ?? '---'}</div>
      )}
    </div>
  );

  const handleSelectOption = (option: SelectOption) => {
    console.log('Handle!');
    onChange(option);
    toggleActive();
  };

  const optionsList = (
    <Card
      theme="secondary"
      className="!py-2 !px-2 flex flex-col gap-1 absolute top-[104%] left-0 right-0"
    >
      {options.map((option) => (
        <Text
          className="hover:bg-zinc-300 px-2 rounded-md"
          onClick={() => handleSelectOption(option)}
          key={option.id}
        >
          {option.text}
        </Text>
      ))}
    </Card>
  );

  return (
    <Card
      theme="primary"
      className={clsx('!py-2 !px-4 w-full relative', className)}
    >
      {dispayedValue}
      {isActive && optionsList}
    </Card>
  );
};
