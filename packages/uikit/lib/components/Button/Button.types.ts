import {Size, Theme} from "@/types/theme.types.ts";

export interface ButtonProps {
  onClick: () => void;
  theme?: Theme;
  size?: Size;
  className?: string | string[];
}

