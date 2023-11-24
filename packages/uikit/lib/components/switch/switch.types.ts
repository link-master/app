import {Theme} from "@/types/theme.types.ts";

export interface SwitchProps {
  theme?: Theme;
  value?: boolean;
  disabled?: boolean;
  onToggle?: (state: boolean) => void;
  className?: string | string[];
}
