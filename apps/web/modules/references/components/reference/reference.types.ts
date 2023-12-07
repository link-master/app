import { ReferenceType, ComponentType } from '@linkmaster/types';
import { MouseEvent } from 'react';

export type ReferenceItemProperties =
  ComponentType.PropertiesWithClassname<ReferenceType.Reference>;

export interface ReferenceContextMenuProperties {
  onDelete: (event: MouseEvent) => void;
  onChange: (event: MouseEvent) => void;
}
