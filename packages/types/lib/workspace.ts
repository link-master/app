import { Identificator } from '@/lib/common.ts';

export interface Workspace {
  id: Identificator;
  name: string;
  slug: string;
}

export type WorkspaceFields = Pick<Workspace, 'name' | 'slug'>;
