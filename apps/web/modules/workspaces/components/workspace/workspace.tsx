import { Icon } from '@iconify/react';
import { clsx } from 'clsx';
import { FC, MouseEvent } from 'react';
import { WorkspaceType, CommonType } from '@linkmaster/types';
import { Text } from '@linkmaster/uikit';

interface WorkspaceProperties extends WorkspaceType.Workspace {
  onClick: (id: CommonType.Identificator) => void;
  onDelete: (id: CommonType.Identificator) => void;
}

export const Workspace: FC<WorkspaceProperties> = ({
  onClick,
  name,
  id,
  onDelete,
}) => {
  const handleClick = (event: MouseEvent) => {
    event?.stopPropagation();
    onClick(id);
  };

  const handleDelete = (event: MouseEvent) => {
    event.stopPropagation();
    onDelete(id);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'p-2 px-4 flex justify-between gap-2 items-center cursor-pointer border rounded-md bg-zinc-100 hover:bg-zinc-200'
      )}
    >
      <div className="flex gap-2 items-center">
        <Icon fontSize={18} icon="fluent:chevron-right-16-filled" />
        <Text>{name}</Text>
      </div>
      <Icon
        fontSize={18}
        onClick={handleDelete}
        icon="fluent:delete-16-filled"
      />
    </div>
  );
};
