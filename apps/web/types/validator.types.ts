export interface Validator {
  name: string;
  rule: RegExp;
  error: string;
}

export type ValidatorList = Validator[];
