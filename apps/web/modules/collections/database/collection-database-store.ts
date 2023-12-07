import { getDatabase } from '@/database/database.ts';
import { CollectionType } from '@linkmaster/types';

export const collectionDatabaseStore = {
  list: async () => {
    const database = await getDatabase();
    return database.getAll('collection');
  },
  add: async (collection: CollectionType.Collection) => {
    const database = await getDatabase();
    await database.add('collection', collection);
  },
  remove: async (id: CollectionType.Collection['id']) => {
    const database = await getDatabase();
    await database.delete('collection', id);
  },
  update: async (
    collection: Partial<CollectionType.Collection> &
      Pick<CollectionType.Collection, 'id'>
  ) => {
    const database = await getDatabase();
    const oldCollections = await database.get('collection', collection.id);

    if (!oldCollections) {
      throw new Error(`No such reference with id ${collection.id}`);
    }

    await database.put('collection', {
      ...oldCollections,
      ...collection,
    });
  },
};
