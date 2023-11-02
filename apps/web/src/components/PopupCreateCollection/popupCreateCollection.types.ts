import {Collection} from "@/types/collection.types.ts";

export interface PopupCreateCollectionProps {
  active?: boolean;
  onClose?: () => void;
  onCreated?: (collection?: Collection) => void;
}
