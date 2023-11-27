import { CollectionProperties } from '@/modules/collections/components/collection/collection.types.ts';
import { Card } from '@linkmaster/uikit';
import { clsx } from 'clsx';

export const Collection = ({
  className,
  name,
  items,
  id,
}: CollectionProperties) => {
  return (
    <Card id={id} className={clsx('flex justify-between !p-2', className)}>
      <div className="font-bold">{name}</div>
    </Card>
  );
};
