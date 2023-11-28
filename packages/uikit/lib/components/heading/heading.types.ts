import { Theme } from '@/types/theme.types';

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProperties {
  level?: HeadingLevel;
  theme?: Theme;
  className?: string | string[];
}
