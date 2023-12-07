import { Collection } from '@/lib/collection';
import { Identificator, Link } from '@/lib/common';

export interface Reference {
  name: string;
  id: Identificator;
  link: Link;
  parent: Collection['id'];
}

export type ReferenceFields = Pick<Reference, 'name' | 'link' | 'parent'>;
