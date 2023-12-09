import { LocalStorageKey } from '@/hooks/use-local-storage.ts';
import { CollectionType, ReferenceType } from '@linkmaster/types';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

let currentDatabaseName = localStorage.getItem(
  LocalStorageKey.currentWorkspace
) as string;
const DEFAULT_DATABASE_NAME = 'linkmaster';
const DATABASE_VERSION = 1;
if (!currentDatabaseName) {
  localStorage.setItem('CURRENT_DB', DEFAULT_DATABASE_NAME);
  currentDatabaseName = DEFAULT_DATABASE_NAME;
}

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

const openDatabase = () => {
  const currentDatabaseName = localStorage.getItem(
    LocalStorageKey.currentWorkspace
  ) as string;
  return openDB<LinkmasterDatabase>(currentDatabaseName, DATABASE_VERSION, {
    upgrade(database) {
      createReferenceStore(database);
      createCollectionStore(database);
    },
  });
};

export const getDatabase = async () => {
  if (openedDatabase) {
    return openedDatabase;
  }

  return openDatabase();
};
