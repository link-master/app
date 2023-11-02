import {Collection} from "@/types/collection.types.ts";

export interface Reference {
  name: string;
  url: string;
  collection?: Collection['id'];
}
