import {CollectionList} from "@/components/CollectionList";
import {CollectionsStub} from "@/components/CollectionsStub";
import {PopupCreateCollection} from "@/components/PopupCreateCollection";
import {useAtom} from "@/hooks/useAtom.ts";
import collectionStore from "@/stores/collection.store.ts";
import {Collection} from "@/types/collection.types.ts";
import {Button} from "@linkmaster/uikit";
import {useEffect, useState} from "react";

export const CollectionsPage = () => {
  const collections = useAtom(collectionStore.$store, collectionStore.$localStore);
  const [isCreatingCollection, setIsCreatingCollection] = useState(false);

  const onCreateCollection = (collection?: Collection) => {

    if (!collection) {
      const error = new Error('No collection provided for saving');
      console.error(error);
      return;
    }

    collectionStore.add(collection);
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
