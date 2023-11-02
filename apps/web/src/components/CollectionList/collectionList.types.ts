import {Collection} from "@/types/collection.types.ts";

export interface CollectionListProps {
  collections: Collection[];
}

export type CollectionListItemProps = Omit<Collection, 'content' | 'id'>
