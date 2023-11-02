import {getAllItemsFromUnstorage} from "@/utils/unstorage.ts";
import {useStore} from "@nanostores/react";
import {onMount, WritableAtom} from "nanostores";
import {Storage} from "unstorage";

interface ItemWithId {
  id: string;
}

export const useAtom = <T extends ItemWithId>(atomStore: WritableAtom<T[]>, unstorageStore: Storage<T>) => {
  const store = useStore(atomStore);

  onMount(atomStore, () => {
    getAllItemsFromUnstorage(unstorageStore)
      .then(items => {
        atomStore.set(items);
      });
  });

  atomStore.listen(async items => {
    const collectionItems = items.map(collection => ({
      key: collection.id,
      value: JSON.stringify(collection),
    }));

    await unstorageStore.setItems(collectionItems);
  });

  return store;
}


