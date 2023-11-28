import { Size, Theme } from '@/types/theme.types';
import { MouseEvent } from 'react';

export interface LinkProperties {
  href: string;
  target?: '_blank' | '_self';
  theme?: Theme;
  size?: Size;
  className?: string | string[];
  onClick?: (event: MouseEvent) => void;
}
