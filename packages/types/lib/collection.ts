import { Identificator } from '@/lib/common.ts';

export interface Collection {
  id: Identificator;
  name: string;
  description: string;
}

export type CollectionFields = Pick<Collection, 'name' | 'description'>;
