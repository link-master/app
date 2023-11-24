import {AVAILABLE_INPUT_TYPES} from "@/components/Input/input.data.ts";
import {FormEventHandler, HTMLInputTypeAttribute, Ref} from "react";

export type AvailableInputTypes = typeof AVAILABLE_INPUT_TYPES[number];

export interface InputProps  {
  innerRef?: Ref<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  label?: string;
  className?: string | string[];
  type?: Extract<HTMLInputTypeAttribute, AvailableInputTypes>;
  errors?: string[];
  onInput?: FormEventHandler<HTMLInputElement>;
}
