export interface PopupProps extends PopupWrapperProps {
  root?: string;
  className?: string | string[];
  active?: boolean;
}

export interface PopupWrapperProps {
  onClose?: () => void;

}
