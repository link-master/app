import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts';
import { CollectionPopup, Collection } from '@/modules/collections/components';
import { CollectionType } from '@linkmaster/types';
import {
  useCollectionPopup,
  PopupSubmitHandler,
} from '@/modules/collections/hooks';
import {
  addCollection,
  updateCollection,
  selectCollection,
  removeCollection,
} from '@/modules/collections/store';
import { LineList } from '@/widgets/line-list';
import { Button } from '@linkmaster/uikit';
import { useState } from 'react';

export const CollectionsSection = () => {
  // Redux
  const collections = useAppSelector(selectCollection);
  const appDispatch = useAppDispatch();

  // State
  const popupControl = useCollectionPopup();
  const [activeCollectionId, setActiveCollectionId] =
    useState<CollectionType.Collection['id']>(null);

  // Handlers
  const changeCollection = (id: CollectionType.Collection['id']) => {
    setActiveCollectionId(id);
    popupControl.showChangePopup(id);
  };

  const handleDelete = (id: CollectionType.Collection['id']) => {
    appDispatch(removeCollection(id));
  };

  const handlePopupSubmit: PopupSubmitHandler = (action) => {
    popupControl.hidePopup();
    if (action.type === 'change') {
      appDispatch(
        updateCollection({
          id: activeCollectionId,
          ...action.payload,
        })
      );
      setActiveCollectionId(null);
    } else if (action.type === 'create') {
      appDispatch(addCollection(action.payload));
    }
  };

  // Lists
  const collectionList = collections.map((collection) => (
    <Collection
      onChange={changeCollection}
      onDelete={handleDelete}
      key={collection.id}
      {...collection}
    />
  ));

  return (
    <div className="grow p-4">
      <LineList>{collectionList}</LineList>
      <CollectionPopup
        {...popupControl.popupInfo}
        onClose={popupControl.hidePopup}
        onSubmit={handlePopupSubmit}
      />
      <Button
        size="small"
        className="fixed bottom-4 right-4"
        onClick={popupControl.showCreatePopup}
      >
        Добавить референс
      </Button>
    </div>
  );
};
