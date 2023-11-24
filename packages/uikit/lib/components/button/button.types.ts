import {Size, Theme} from "@/types/theme.types.ts";

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  theme?: Theme;
  size?: Size;
  className?: string | string[];
}

