import {Reference} from "@/types/reference.types.ts";

export interface ReferenceListProps {
  references: Reference[];
}

export type ReferenceListItemProps = Omit<Reference, 'content' | 'id'>
