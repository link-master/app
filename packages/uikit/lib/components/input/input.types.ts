import { AVAILABLE_INPUT_TYPES } from '@/components/input/input.data';
import { HTMLProps, RefObject } from 'react';

export type AvailableInputTypes = (typeof AVAILABLE_INPUT_TYPES)[number];

type RestrictedInputFields = 'ref';

export interface InputProperties
  extends Omit<HTMLProps<HTMLInputElement>, RestrictedInputFields> {
  label?: string;
  innerRef?: RefObject<HTMLInputElement>;
  errors?: string[] | null;
}
