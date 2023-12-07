import { useAppDispatch } from '@/hooks/use-redux.ts';
import { collectionDatabaseStore } from '@/modules/collections/database';
import { setRawCollections } from '@/modules/collections/store';
import { referenceDatabaseStore } from '@/modules/references/database';
import { setRawReferences } from '@/modules/references/store';
import { useCallback } from 'react';

export const useDataInitializer = () => {
  const appDispatch = useAppDispatch();

  return useCallback(async () => {
    const references = await referenceDatabaseStore.list();
    const collections = await collectionDatabaseStore.list();
    appDispatch(setRawReferences(references));
    appDispatch(setRawCollections(collections));
  }, [appDispatch]);
};
