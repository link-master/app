import { Theme } from '@/types/theme.types.ts';

export interface SwitchProperties {
  theme?: Theme;
  value?: boolean;
  disabled?: boolean;
  onToggle?: (state: boolean) => void;
  className?: string | string[];
}
