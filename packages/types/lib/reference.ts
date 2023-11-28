import { Collection } from '@/lib/collection.ts';
import { Identificator, Link } from '@/lib/common.ts';

export interface Reference {
  name: string;
  id: Identificator;
  link: Link;
  parent: Collection['id'];
}
