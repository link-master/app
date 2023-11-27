import { getDatabase } from '@/database/database.ts';
import { Reference } from '@/types/reference.types.ts';

export const referenceDatabaseStore = {
  list: async () => {
    const database = await getDatabase();
    return database.getAll('reference');
  },
  add: async (reference: Reference) => {
    const database = await getDatabase();
    await database.add('reference', reference);
  },
  remove: async (id: Reference['id']) => {
    const database = await getDatabase();
    await database.delete('reference', id);
  },
  update: async (reference: Partial<Reference> & Pick<Reference, 'id'>) => {
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
