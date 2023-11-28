import { Size, Theme } from '@/types/theme.types';
import { HTMLProps } from 'react';

export interface TextProperties
  extends Omit<HTMLProps<HTMLParagraphElement>, 'size'> {
  theme?: Theme;
  bold?: boolean;
  italic?: boolean;
  inline?: boolean;
  size?: Size;
}
