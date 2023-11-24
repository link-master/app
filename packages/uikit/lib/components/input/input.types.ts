import { AVAILABLE_INPUT_TYPES } from '@/components/input/input.data.ts';
import { FormEventHandler, HTMLInputTypeAttribute, Ref } from 'react';

export type AvailableInputTypes = (typeof AVAILABLE_INPUT_TYPES)[number];

export interface InputProperties {
  innerRef?: Ref<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  label?: string;
  className?: string | string[];
  type?: Extract<HTMLInputTypeAttribute, AvailableInputTypes>;
  errors?: string[];
  onInput?: FormEventHandler<HTMLInputElement>;
}
