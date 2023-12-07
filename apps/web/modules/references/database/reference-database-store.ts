import { getDatabase } from '@/database/database.ts';
import { ReferenceType } from '@linkmaster/types';

export const referenceDatabaseStore = {
  list: async () => {
    const database = await getDatabase();
    return database.getAll('reference');
  },
  add: async (reference: ReferenceType.Reference) => {
    const database = await getDatabase();
    await database.add('reference', reference);
  },
  remove: async (id: ReferenceType.Reference['id']) => {
    const database = await getDatabase();
    await database.delete('reference', id);
  },
  update: async (
    reference: Partial<ReferenceType.Reference> &
      Pick<ReferenceType.Reference, 'id'>
  ) => {
    const database = await getDatabase();
    const oldReference = await database.get('reference', reference.id);

    if (!oldReference) {
      throw new Error(`No such reference with id ${reference.id}`);
    }

    await database.put('reference', {
      ...oldReference,
      ...reference,
    });
  },
};
