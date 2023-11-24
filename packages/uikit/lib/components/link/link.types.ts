import {Size, Theme} from "@/types/theme.types.ts";
import {MouseEvent} from "react";


export interface LinkProps {
  href: string;
  target?: '_blank' | '_self';
  theme?: Theme;
  size?: Size;
  className?: string | string[];
  onClick?: (e: MouseEvent) => void;
}
