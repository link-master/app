import { CollectionType, ReferenceType } from '@linkmaster/types';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

const DATABASE_NAME = 'linkmaster';
const DATABASE_VERSION = 1;

interface LinkmasterDatabase extends DBSchema {
  reference: {
    key: ReferenceType.Reference['id'];
    value: ReferenceType.Reference;
    indexes: { id: ReferenceType.Reference['id'] };
  };
  collection: {
    key: CollectionType.Collection['id'];
    value: CollectionType.Collection;
    indexes: { id: CollectionType.Collection['id'] };
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
