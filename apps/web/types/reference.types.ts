import { Collection } from '@/types/collection.types.ts';

export interface Reference {
  id: string;
  link: string;
  name: string;
  collection: Collection['id'];
}
