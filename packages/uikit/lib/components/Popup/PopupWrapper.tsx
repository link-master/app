import {PopupWrapperProps} from "@/components/Popup/popup.types.ts";
import {PropsWithChildren} from "react";

export const PopupWrapper = ({children, onClose}: PropsWithChildren<PopupWrapperProps>) => {
  return (
    <div className="popup absolute inset-0 h-screen w-screen z-10 flex justify-center items-center">
      <div className="bg-zinc-800 opacity-20 absolute inset-0" onClick={onClose} />
      {children}
    </div>
  );
};
