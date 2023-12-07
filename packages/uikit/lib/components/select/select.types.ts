import { HTMLProps, RefObject } from 'react';

export interface SelectOption {
  text: string;
  value: string;
}

export interface SelectProperties
  extends Omit<HTMLProps<HTMLSelectElement>, 'onChange' | 'value'> {
  options: SelectOption[];
  label?: string;
  innerRef?: RefObject<HTMLDivElement>;
  required?: boolean;
  value?: SelectOption['value'];
  onChange: (option: SelectOption['value']) => void;
  placeholder?: string;
}
