import {Storage, StorageValue} from "unstorage";

export const getAllItemsFromUnstorage = async <T extends StorageValue>(store: Storage<T>): Promise<T[]> => {
  const keys = await store.getKeys();
  const fields = await store.getItems(keys);
  return fields.map(item => item.value) as T[];
};
