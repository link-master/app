import {Reference} from "@/types/reference.types.ts";

type CollectionColor = 'pink'
  | 'blue'
  | 'indigo'
  | 'red'
  | 'orange'
  | 'emerald'
  | 'rose';

export interface Collection {
  id: string;
  name: string;
  icon?: string;
  color?: CollectionColor;
  description: string;
  content: Array<Reference>;
}
