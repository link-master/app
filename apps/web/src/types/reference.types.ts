import {Collection} from "@/types/collection.types.ts";

export interface Reference {
  id: string;
  name: string;
  url: string;
  collection?: Collection['id'];
}
