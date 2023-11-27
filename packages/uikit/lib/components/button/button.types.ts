import { Size, Theme } from '@/types/theme.types.ts';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProperties
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  theme?: Theme;
  disabled?: boolean;
  size?: Size;
}
