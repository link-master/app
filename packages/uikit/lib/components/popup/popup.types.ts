export interface PopupProperties extends PopupWrapperProperties {
  root?: string;
  className?: string | string[];
  active?: boolean;
}

export interface PopupWrapperProperties {
  onClose?: () => void;
}
