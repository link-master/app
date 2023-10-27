import {PropsWithChildren, useEffect} from "react";
import {Card} from "@/components/Card";
import {PopupProps} from "./popup.types.ts";
import {PopupWrapper} from "./PopupWrapper.tsx";
import {createPortal} from 'react-dom';
import {clsx} from "clsx";

export const Popup = ({children, root, onClose, active, className}: PropsWithChildren<PopupProps>) => {
  const popup = active && (
    <PopupWrapper onClose={onClose}>
      <Card className={clsx('z-20', className)}>
        {children}
      </Card>
    </PopupWrapper>
  );

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) =>
      event.key === 'Escape' &&
      onClose &&
      onClose();

    if (active) {
      console.log(1);
      window.addEventListener('keydown', onEscape);
    } else {
      console.log(2);
      window.removeEventListener('keydown', onEscape);
    }
  }, [active]);

  return createPortal(popup, root ?? document.body);
};
