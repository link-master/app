import {Size, Theme} from "@/types/theme.types.ts";


export interface LinkProps {
  href: string;
  target?: '_blank' | '_self';
  theme?: Theme;
  size?: Size;
  className?: string | string[];
}
