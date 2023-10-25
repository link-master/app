import {BasicThemeProperties} from "@/types/theme.types.ts";

export interface ButtonProps extends BasicThemeProperties {
  onClick: () => void;
}

