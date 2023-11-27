import { Collection } from '@/types/collection.types.ts';

export interface CreateCollectionPopupProperties {
  onClose: () => void;
  onSubmit: (collection: Collection) => void;
  active: boolean;
  title?: string;
  collectionId?: Collection['id'] | null;
}
