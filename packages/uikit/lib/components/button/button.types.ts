import { Size, Theme } from '@/types/theme.types.ts';

export interface ButtonProperties {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  theme?: Theme;
  disabled?: boolean;
  size?: Size;
  className?: string | string[];
}
