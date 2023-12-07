import { CommonType } from '@linkmaster/types';

export interface Reference {
  id: string;
  link: string;
  name: string;
  collection: CommonType.Identificator;
}
