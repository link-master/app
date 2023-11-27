import { URL_REGEX } from '@/data/regex.ts';
import { Validator } from '@/types/validator.types.ts';

export const urlValidator: Validator = {
  name: 'url',
  rule: URL_REGEX,
  error: 'Введите правильный URL',
};
