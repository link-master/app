import { useAppDispatch, useAppSelector } from '@/hooks/useRedux.ts';
import {
  CollectionsSection,
  CollectionsSectionStub,
} from '@/modules/collections/components';
import { collectionDatabaseStore } from '@/modules/collections/database';
import { setRawCollections } from '@/modules/collections/store';
import { useEffect, useState } from 'react';

export const CollectionsPage = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const references = useAppSelector((state) => state.collection.collections);
  const appDispatch = useAppDispatch();
  const [isCreatingCollection, setIsCreatingCollection] = useState(false);

  useEffect(() => {
    collectionDatabaseStore.list().then((collections) => {
      appDispatch(setRawCollections(collections));
    });
  }, [appDispatch]);

  return (
    <div className="min-h-screen w-full flex">
      {references.length > 0 ? (
        <CollectionsSection
          collections={references}
          onShowCreatePopup={() => setIsCreatingCollection(true)}
        />
      ) : (
        <CollectionsSectionStub
          onShowCreatePopup={() => setIsCreatingCollection(true)}
        />
      )}
    </div>
  );
};
