import { Card } from '@/components/card';
import { clsx } from 'clsx';
import { useState } from 'react';

interface SelectOption {
  id: string;
  text: string;
  value: string;
}

interface SelectProperties {
  options: SelectOption[];
  value?: SelectOption['id'];
  className?: string;
  onChange: (option: SelectOption) => void;
  placeholder?: string;
}

export const Select = ({
  options,
  value,
  className,
  placeholder,
  onChange,
}: SelectProperties) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<
    SelectOption['id'] | null
  >(value || null);
  const [isActive, setIsActive] = useState(false);

  const currentOption = options.find(
    (option) => option.id === currentOptionIndex
  );

  const dispayedValue = currentOption?.text ? (
    <div>{currentOption.text}</div>
  ) : (
    <div className="text-zinc-500">{placeholder}</div>
  );

  const handleSelectOption = (option: SelectOption) => {
    setCurrentOptionIndex(option.id);
    setIsActive(false);
    onChange(option);
  };

  const optionsList = (
    <Card theme="secondary" className="absolute -bottom-0.5">
      {options.map((option) => (
        <div onClick={() => handleSelectOption(option)} key={option.id}>
          {option.text}
        </div>
      ))}
    </Card>
  );

  return (
    <Card theme="primary" className={clsx('!py-2 !px-3 relative', className)}>
      {dispayedValue}
      {isActive && optionsList}
    </Card>
  );
};
