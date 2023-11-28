import { Collection } from '@/types/collection.types.ts';
import { Reference } from '@/types/reference.types.ts';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

const DATABASE_NAME = 'linkmaster';
const DATABASE_VERSION = 1;

interface LinkmasterDatabase extends DBSchema {
  reference: {
    key: Reference['id'];
    value: Reference;
    indexes: { id: Reference['id'] };
  };
  collection: {
    key: Collection['id'];
    value: Collection;
    indexes: { id: Collection['id'] };
  };
}

enum DatabaseStore {
  reference = 'reference',
  collection = 'collection',
}

const createReferenceStore = (database: IDBPDatabase<LinkmasterDatabase>) =>
  database.createObjectStore(DatabaseStore.reference, {
    keyPath: 'id',
    autoIncrement: false,
  });

const createCollectionStore = (database: IDBPDatabase<LinkmasterDatabase>) =>
  database.createObjectStore(DatabaseStore.collection, {
    keyPath: 'id',
    autoIncrement: false,
  });

let openedDatabase: IDBPDatabase<LinkmasterDatabase>;
export const getDatabase = async () => {
  if (openedDatabase) {
    return openedDatabase;
  }

  openedDatabase = await openDB<LinkmasterDatabase>(
    DATABASE_NAME,
    DATABASE_VERSION,
    {
      upgrade(database) {
        createReferenceStore(database);
        createCollectionStore(database);
      },
    }
  );

  return openedDatabase;
};