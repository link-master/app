import { collectionDatabaseStore } from '@/modules/collections/database/collection-database-store.ts';
import { referenceDatabaseStore } from './referenceDatabaseStore.ts';
import { getDatabase } from './database.ts';

export default {
  getDatabase,
  referenceDatabaseStore,
  collectionDatabaseStore,
};
