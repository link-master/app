export interface PopupProps extends PopupWrapperProps {
  root?: HTMLElement | null;
  className?: string | string[];
  active?: boolean;
}

export interface PopupWrapperProps {
  onClose?: () => void;

}
