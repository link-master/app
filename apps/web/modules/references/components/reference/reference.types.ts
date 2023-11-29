import { Reference, Component } from '@linkmaster/types';
import { MouseEvent } from 'react';

export type ReferenceItemProperties =
  Component.PropertiesWithClassname<Reference.Reference>;

export interface ReferenceContextMenuProperties {
  onDelete: (event: MouseEvent) => void;
  onChange: (event: MouseEvent) => void;
}
