import { CommonType } from '@linkmaster/types';
import { SelectOption } from '@/components/select';
import { get as getObjectValueByPath } from 'lodash-es';

interface RequiredSelectFields {
  id: CommonType.Identificator;
}

export const mapToSelect = <T extends RequiredSelectFields>(
  list: T[],
  valueKeyPath: string,
  textKeyPath: string
): SelectOption[] => {
  return list.map((item) => {
    return {
      value: getObjectValueByPath(item, valueKeyPath),
      text: getObjectValueByPath(item, textKeyPath),
    } as SelectOption;
  });
};
