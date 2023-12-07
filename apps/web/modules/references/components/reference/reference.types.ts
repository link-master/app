import { ReferenceType, CommonType, ComponentType } from '@linkmaster/types';
import { MouseEvent } from 'react';

export type ReferenceItemProperties =
  ComponentType.PropertiesWithClassname<ReferenceType.Reference> & {
    onChange: (id: CommonType.Identificator) => void;
    onDelete: (id: CommonType.Identificator) => void;
  };

export interface ReferenceContextMenuProperties {
  onDelete: (event: MouseEvent) => void;
  onChange: (event: MouseEvent) => void;
}
