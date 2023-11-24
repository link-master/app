import { Size, Theme } from '@/types/theme.types.ts';

export interface TextProperties {
  theme?: Theme;
  bold?: boolean;
  italic?: boolean;
  inline?: boolean;
  size?: Size;
  className?: string | string[];
}
