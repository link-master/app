import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts';
import {
  CollectionsSection,
  CollectionsSectionStub,
} from '@/modules/collections/components';
import { collectionDatabaseStore } from '@/modules/collections/database';
import { setRawCollections } from '@/modules/collections/store';
import { useEffect } from 'react';

export const CollectionsPage = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const collections = useAppSelector((state) => state.collection.collections);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    collectionDatabaseStore.list().then((collections) => {
      appDispatch(setRawCollections(collections));
    });
  }, [appDispatch]);

  return (
    <div className="min-h-screen w-full flex">
      {collections.length > 0 ? (
        <CollectionsSection />
      ) : (
        <CollectionsSectionStub onShowCreatePopup={() => setHasPopup(true)} />
      )}
    </div>
  );
};
