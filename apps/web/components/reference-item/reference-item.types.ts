import { Reference } from '@/types/reference.types.ts';
import { PropsWithClassname } from '@/types/utils.types.ts';
import { MouseEvent } from 'react';

export type ReferenceItemProperties = PropsWithClassname<Reference>;

export interface ReferenceContextMenuProperties {
  onDelete: (event: MouseEvent) => void;
  onChange: (event: MouseEvent) => void;
}
