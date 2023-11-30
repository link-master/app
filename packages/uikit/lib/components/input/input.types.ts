import { AVAILABLE_INPUT_TYPES } from '@/components/input/input.data';
import { HTMLProps } from 'react';

export type AvailableInputTypes = (typeof AVAILABLE_INPUT_TYPES)[number];

export interface InputProperties extends HTMLProps<HTMLInputElement> {
  label?: string;
  errors?: string[] | null;
}
