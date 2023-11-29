import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts';
import {
  CollectionsSection,
  CollectionsSectionStub,
} from '@/modules/collections/components';
import { CollectionPopup } from '@/modules/collections/components';
import { collectionDatabaseStore } from '@/modules/collections/database';
import { setRawCollections, addCollection } from '@/modules/collections/store';
import { Collection } from '@/types/collection.types.ts';
import { useEffect, useState } from 'react';

export const CollectionsPage = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const references = useAppSelector((state) => state.collection.collections);
  const appDispatch = useAppDispatch();
  const [hasPopup, setHasPopup] = useState(false);

  const handleClosePopup = () => {
    setHasPopup(false);
  };

  const handlePopupSubmit = async (collection: Collection) => {
    appDispatch(addCollection(collection));
  };

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
          onShowCreatePopup={() => setHasPopup(true)}
        />
      ) : (
        <CollectionsSectionStub onShowCreatePopup={() => setHasPopup(true)} />
      )}
      <CollectionPopup
        onSubmit={handlePopupSubmit}
        onClose={handleClosePopup}
        active={hasPopup}
      />
    </div>
  );
};
