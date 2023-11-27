import { CollectionProperties } from '@/modules/collections/components/collection/collection.types.ts';
import { Icon } from '@iconify/react';
import { Card, Text } from '@linkmaster/uikit';
import { clsx } from 'clsx';

export const Collection = ({
  className,
  name,
  items,
  description,
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
        {items?.length >= 0 && (
          <div className="flex justify-start gap-1 items-center h-fit">
            <Icon
              className="text-zinc-400"
              icon="fluent:hexagon-three-12-filled"
            />
            <Text
              className="text-sm flex justify-center items-center"
              theme="secondary"
            >
              {items.length}
            </Text>
          </div>
        )}
        <div className="flex gap-2">
          <Icon
            icon="fluent:edit-24-filled"
            fontSize={18}
            className="text-zinc-400 hover:text-zinc-600"
          />
          <Icon
            icon="fluent:delete-24-filled"
            fontSize={18}
            className="text-zinc-400 hover:text-zinc-600"
          />
        </div>
      </div>
    </Card>
  );
};
