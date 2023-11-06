import {Reference} from "@/types/reference.types.ts";

export interface CreateReferencePopupProps {
  name?: string;
  url?: string;
  active?: boolean;
  onClose?: () => void;
  onCreated?: (reference: Reference) => void;
}
