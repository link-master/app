import {AVAILABLE_INPUT_TYPES} from "@/components/Input/input.data.ts";
import {FormEventHandler, HTMLInputTypeAttribute} from "react";

export type AvailableInputTypes = typeof AVAILABLE_INPUT_TYPES[number];

export interface InputProps  {
  value: string;
  placeholder?: string;
  label?: string;
  className?: string | string[];
  type?: Extract<HTMLInputTypeAttribute, AvailableInputTypes>;
  errors?: string[];
  onInput?: FormEventHandler<HTMLInputElement>;
}
