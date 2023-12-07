import { CommonType, CollectionType } from '@linkmaster/types';

export interface CreateCollectionPopupProperties {
  onClose: () => void;
  onSubmit: (collection: CollectionType.Collection) => void;
  active: boolean;
  title?: string;
  collectionId?: CommonType.Identificator | null;
}
