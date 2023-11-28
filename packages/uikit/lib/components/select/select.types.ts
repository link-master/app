export interface SelectOption {
  id: string;
  text: string;
  value: string;
}

export interface SelectProperties {
  options: SelectOption[];
  value?: SelectOption['id'];
  className?: string;
  onChange: (option: SelectOption) => void;
  placeholder?: string;
}
