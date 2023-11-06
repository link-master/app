import {CollectionList} from "@/components/CollectionList";
import {CollectionsStub} from "@/components/CollectionsStub";
import {PopupCreateCollection} from "@/components/PopupCreateCollection";
import {useAppDispatch, useAppSelector} from "@/store";
import {collectionSlice} from "@/store/features/collection/collectionSlice.ts";
import {Collection} from "@/types/collection.types.ts";
import {Button} from "@linkmaster/uikit";
import {useState} from "react";

export const CollectionsPage = () => {
  const [isCreatingCollection, setIsCreatingCollection] = useState(false);
  const collections = useAppSelector(state => state.collection.value);
  const dispatch = useAppDispatch();


  const onCreateCollection = (collection?: Collection) => {

    if (!collection) {
      const error = new Error('No collection provided for saving');
      console.error(error);
      return;
    }

    dispatch(collectionSlice.actions.add(collection))
    setIsCreatingCollection(false);
  }

  return (
    <div className="h-screen w-screen p-8">
      {
        collections?.length
          ? <>
            <CollectionList collections={collections} />
            <Button
              size="small"
              onClick={() => setIsCreatingCollection(true)}
              className="fixed bottom-4 right-4"
            >
              Добавить коллекцию
            </Button>
          </>
          : <CollectionsStub onCreate={() => setIsCreatingCollection(true)}/>
      }
      <PopupCreateCollection
        onCreated={onCreateCollection}
        onClose={() => setIsCreatingCollection(false)}
        active={isCreatingCollection}
      />
    </div>
  );
};
