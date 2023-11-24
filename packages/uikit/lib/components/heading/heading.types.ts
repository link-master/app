import {Theme} from "@/types/theme.types.ts";

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps {
  level?: HeadingLevel;
  theme?: Theme;
  className?: string | string[];
}
