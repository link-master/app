import { getDatabase } from '@/database/database.ts';
import { Collection } from '@linkmaster/types';

export const collectionDatabaseStore = {
  list: async () => {
    const database = await getDatabase();
    return database.getAll('collection');
  },
  add: async (collection: Collection.Collection) => {
    const database = await getDatabase();
    await database.add('collection', collection);
  },
  remove: async (id: Collection.Collection['id']) => {
    const database = await getDatabase();
    await database.delete('collection', id);
  },
  update: async (
    collection: Partial<Collection.Collection> &
      Pick<Collection.Collection, 'id'>
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
