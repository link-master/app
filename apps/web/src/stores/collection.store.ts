import {Collection} from "@/types/collection.types.ts";
import {atom} from 'nanostores';
import {createStorage} from "unstorage";
import indexedDbDriver from "unstorage/drivers/indexedb";

export const $localStore = createStorage<Collection>({
  driver: indexedDbDriver({base: 'collection'}),
});

export const $store = atom<Collection[]>([]);

export const remove = (id: Collection['id']) => {
  $store.set($store.get().filter(collection => collection.id !== id));
};

export const add = (collection: Collection) => {
  $store.set([...$store.get(), collection]);
};

export const get = (id: Collection['id']) => {
  return $store
    .get()
    .find(collection => collection.id === id);
};

export default {
  $store,
  $localStore,
  add,
  remove,
  get,
}
