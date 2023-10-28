export interface CreateReferencePopupProps {
  name?: string;
  url?: string;
  active?: boolean;
  onClose?: () => void;
  onCreated?: () => void;
}
