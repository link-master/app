import {PropsWithChildren, useEffect} from "react";
import {Card} from "@/components/Card";
import {PopupProps, PopupWrapperProps} from "./popup.types.ts";
import {createPortal} from 'react-dom';
import {clsx} from "clsx";

const PopupWrapper = ({children, onClose}: PropsWithChildren<PopupWrapperProps>) => {
  return (
    <div className="popup absolute inset-0 h-screen w-screen z-10 flex justify-center items-center">
      <div className="bg-zinc-800 opacity-20 absolute inset-0" onClick={onClose} />
      {children}
    </div>
  );
};

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
      addEventListener('keydown', onEscape);
    } else {
      removeEventListener('keydown', onEscape);
    }
  }, [active]);

  return createPortal(popup, document.querySelector(root ?? 'body')!);
};
