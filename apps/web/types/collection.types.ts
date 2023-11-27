import { Reference } from '@/types/reference.types.ts';

export interface Collection {
  id: string;
  name: string;
  description: string;
  items: Reference['id'][];
}
