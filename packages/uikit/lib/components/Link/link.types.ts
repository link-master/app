import {BasicThemeProperties} from "@/types/theme.types.ts";


export interface LinkProps extends BasicThemeProperties {
  href: string;
  target?: '_blank' | '_self';
}
