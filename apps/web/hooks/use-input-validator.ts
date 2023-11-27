import { ValidatorList, Validator } from '@/types/validator.types.ts';
import { RefObject, useEffect, useState } from 'react';

function useInputValidator(
  inputReference: RefObject<HTMLInputElement> | null | undefined,
  list: ValidatorList
) {
  const [isDirty, setIsDirty] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const clearDirty = () => {
    setIsDirty(false);
  };

  const validate = (rule: Validator['rule'], input: HTMLInputElement) =>
    rule.test(input.value);

  useEffect(() => {
    const input = inputReference?.current;

    if (!input) {
      return;
    }

    const onInput: EventListener = (event) => {
      const input = event.target as HTMLInputElement;
      setIsDirty(true);
      setErrors(() => []);

      for (const validator of list) {
        if (validate(validator.rule, input)) {
          continue;
        }

        setErrors((state) => [...state, validator.error]);
      }
    };
    input.addEventListener('input', onInput);

    return () => {
      setIsDirty(false);

      if (!input) {
        return;
      }

      input.removeEventListener('input', onInput);
    };
  }, [inputReference, list]);

  return {
    clearDirty,
    isDirty,
    errors,
  };
}

export default useInputValidator;
