import { getDatabase } from '@/database/database.ts';
import { Reference } from '@linkmaster/types';

export const referenceDatabaseStore = {
  list: async () => {
    const database = await getDatabase();
    return database.getAll('reference');
  },
  add: async (reference: Reference.Reference) => {
    const database = await getDatabase();
    await database.add('reference', reference);
  },
  remove: async (id: Reference.Reference['id']) => {
    const database = await getDatabase();
    await database.delete('reference', id);
  },
  update: async (
    reference: Partial<Reference.Reference> & Pick<Reference.Reference, 'id'>
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
