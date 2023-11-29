import {
  ReferenceContextMenuProperties,
  ReferenceItemProperties,
} from './reference.types.ts';
import { useAppDispatch } from '@/hooks/use-redux.ts';
import { removeReference } from '@/modules/references/store/reference-slice.ts';
import { PropsWithClassname } from '@/types/utils.types.ts';
import { Icon } from '@iconify/react';
import { Heading, Text, Card } from '@linkmaster/uikit';
import { clsx } from 'clsx';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ContextMenu = ({
  className,
  onDelete,
  onChange,
}: PropsWithClassname<ReferenceContextMenuProperties>) => {
  const itemClasses =
    'flex gap-2 items-center py-1 px-4 hover:bg-zinc-300 rounded-md';

  return (
    <Card
      theme="secondary"
      className={clsx('absolute flex flex-col top-0 right-0 !p-2', className)}
    >
      <div onClick={onChange} className={itemClasses}>
        <Icon icon="fluent:edit-24-filled" />
        Изменить
      </div>
      <div onClick={onDelete} className={itemClasses}>
        <Icon icon="fluent:delete-24-filled" />
        Удалить
      </div>
    </Card>
  );
};

export const Reference = ({
  id,
  link,
  name,
  className,
}: ReferenceItemProperties) => {
  const linkClasses = name
    ? 'block py-4 px-6'
    : 'w-full py-4 px-6 h-full flex justify-center items-center';

  const [hasContextMenu, setHasContextMenu] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const appDispatch = useAppDispatch();

  const toggleContextMenu = useCallback(
    (event?: MouseEvent) => {
      event?.preventDefault();
      event?.stopPropagation();
      setHasContextMenu(!hasContextMenu);
    },
    [hasContextMenu]
  );

  const change = () => {};

  const handleChange = (event: MouseEvent) => {
    console.log('Change');
    event.preventDefault();
  };

  const handleDelete = (event: MouseEvent) => {
    event.preventDefault();
    appDispatch(removeReference(id));
  };

  useEffect(() => {
    const toggleMenu = () => toggleContextMenu();
    if (hasContextMenu) {
      document.addEventListener('click', toggleMenu);
    }

    return () => {
      document.removeEventListener('click', toggleMenu);
    };
  }, [hasContextMenu, toggleContextMenu]);

  return (
    <Card className="!p-0 hover:border-zinc-300">
      <Link
        target="_blank"
        id={id}
        className={clsx(linkClasses, className)}
        to={link}
        rel="noreferrer"
      >
        <div className="flex relative justify-between items-top">
          <Heading>{name}</Heading>
          <Icon
            fontSize={20}
            onClick={toggleContextMenu}
            className="block hover:text-zinc-800 text-zinc-400"
            icon="fluent:more-horizontal-28-regular"
          />
          {hasContextMenu && (
            <ContextMenu onDelete={handleDelete} onChange={handleChange} />
          )}
        </div>
        <Text
          size={name ? 'small' : 'medium'}
          className="!text-violet-500 mt-1"
        >
          {link}
        </Text>
      </Link>
    </Card>
  );
};
