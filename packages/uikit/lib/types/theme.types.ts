export type Theme = 'primary' | 'secondary' | 'tertiary';
export type Size = 'medium' | 'large' | 'small';

export interface BasicThemeProperties {
  theme?: Theme;
  size?: Size;
  className?: string | string[];
}
