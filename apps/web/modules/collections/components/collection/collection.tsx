import { Icon } from '@iconify/react';
import { CollectionType, CommonType } from '@linkmaster/types';
import { Card, Text } from '@linkmaster/uikit';
import { clsx } from 'clsx';

interface CollectionProperties extends CollectionType.Collection {
  className?: string;
  onChange: (id: CommonType.Identificator) => void;
  onDelete: (id: CommonType.Identificator) => void;
}

export const Collection = ({
  className,
  name,
  description,
  onChange,
  onDelete,
  id,
}: CollectionProperties) => {
  return (
    <Card
      id={id}
      className={clsx(
        'flex items-start justify-between hover:border-zinc-300 cursor-pointer !p-2 !px-4',
        className
      )}
    >
      <div
        className={clsx(
          'flex flex-col gap-1 h-full',
          !description && 'my-auto'
        )}
      >
        <Text className={clsx(!description && '!text-2xl')} bold>
          {name}
        </Text>
        {description && (
          <Text theme="secondary" size="small">
            {description}
          </Text>
        )}
      </div>
      <div className="flex-col flex justify-between gap-2 items-end">
        <div className="flex gap-2">
          <Icon
            icon="fluent:edit-24-filled"
            onClick={() => onChange(id)}
            fontSize={18}
            className="text-zinc-400 hover:text-zinc-600"
          />
          <Icon
            icon="fluent:delete-24-filled"
            onClick={() => onDelete(id)}
            fontSize={18}
            className="text-zinc-400 hover:text-zinc-600"
          />
        </div>
      </div>
    </Card>
  );
};
