import { Collection } from '@/types/collection.types.ts';

export interface CollectionsSectionProperties {
  collections: Collection[];
  onShowCreatePopup: () => void;
}
