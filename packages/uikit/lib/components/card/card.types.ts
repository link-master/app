import { Size, Theme } from '@/types/theme.types';
import { HTMLProps } from 'react';

export interface CardProperties extends HTMLProps<HTMLDivElement> {
  padding?: Size;
  theme?: Theme;
}
