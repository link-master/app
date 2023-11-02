import {Reference} from "@/types/reference.types.ts";
import {createStorage} from "unstorage";
import indexedDbDriver from 'unstorage/drivers/indexedb';

const referenceStorage = createStorage<Reference>({
  driver: indexedDbDriver({base: 'reference'}),
});

export default referenceStorage;
