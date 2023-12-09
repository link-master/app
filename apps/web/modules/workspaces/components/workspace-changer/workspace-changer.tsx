import { useDataInitializer } from '@/hooks/use-data-initializer.ts';
import useLocalStorage, { LocalStorageKey } from '@/hooks/use-local-storage.ts';
import { Workspace, WorkspacePopup } from '@/modules/workspaces/components';
import { defaultWorkspace } from '@/modules/workspaces/data/default-workspace.ts';
import { Icon } from '@iconify/react';
import { WorkspaceType, CommonType } from '@linkmaster/types';
import { Button, Text } from '@linkmaster/uikit';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

export const WorkspaceChanger = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [workspaceList, updateWorkspaceList] = useLocalStorage(
    LocalStorageKey.workspaces
  );
  const [currentWorkspaceId, updateCurrentWorkspaceId] = useLocalStorage(
    LocalStorageKey.currentWorkspace
  );

  const initData = useDataInitializer();

  useEffect(() => {
    if (!Array.isArray(workspaceList)) {
      updateWorkspaceList([defaultWorkspace]);
    }

    if (!currentWorkspaceId) {
      updateCurrentWorkspaceId(defaultWorkspace.id);
    }
  }, [
    currentWorkspaceId,
    updateCurrentWorkspaceId,
    workspaceList,
    updateWorkspaceList,
  ]);

  // TODO Figure out how to remove transformations from StateType inside useLocalStorage
  const currentWorkspace = (workspaceList as WorkspaceType.Workspace[])?.find(
    (workspace) => workspace.id === currentWorkspaceId
  );

  const toggleActive = () => {
    setIsActive((state) => !state);
  };

  const handleCreateWorkspace = (fields: WorkspaceType.WorkspaceFields) => {
    const workspace: WorkspaceType.Workspace = {
      ...fields,
      id: `workspace:${Date.now().toString()}`,
    };

    updateWorkspaceList([
      ...(workspaceList as WorkspaceType.Workspace[]),
      workspace,
    ]);
    updateCurrentWorkspaceId(workspace.id);
  };

  const closePopup = () => {
    setIsPopupActive(false);
  };
  const showPopup = () => {
    setIsPopupActive(true);
  };

  const handleSelectWorkspace = (id: CommonType.Identificator) => {
    updateCurrentWorkspaceId(id);
    setIsActive(false);
    setIsPopupActive(false);
    initData();
  };

  const handleDeleteWorkspace = (id: CommonType.Identificator) => {
    updateWorkspaceList(
      (workspaceList as WorkspaceType.Workspace[]).filter(
        (workspace) => workspace.id !== id
      )
    );
  };

  const chooseWorkspaceElement = (
    <>
      <Text className="mb-2" bold>
        Выберите другое рабочее пространство:
      </Text>
      <ul className="flex flex-col gap-2">
        {(workspaceList as WorkspaceType.Workspace[])
          ?.filter((workspace) => workspace.id !== currentWorkspaceId)
          ?.map((workspace) => {
            return (
              <Workspace
                key={workspace.id}
                onClick={handleSelectWorkspace}
                onDelete={handleDeleteWorkspace}
                {...workspace}
              />
            );
          })}
      </ul>
    </>
  );

  return (
    <div className="relative p-4 select-none pb-0">
      <div
        onClick={toggleActive}
        className={clsx(
          'p-2 flex gap-2 items-center rounded-md cursor-pointer hover:bg-zinc-100 px-4',
          isActive && 'bg-zinc-100'
        )}
      >
        {isActive ? (
          <Icon fontSize={18} icon="fluent:chevron-down-up-16-filled" />
        ) : (
          <Icon fontSize={18} icon="fluent:chevron-up-down-16-filled" />
        )}
        <Text bold>{currentWorkspace?.name}</Text>
      </div>
      <div
        className={clsx(
          isActive ? 'flex flex-col' : 'hidden',
          'bg-white p-4 pb-8 border-b absolute left-0 right-0'
        )}
      >
        {(workspaceList as WorkspaceType.Workspace[])?.length > 1 &&
          chooseWorkspaceElement}
        <Button
          onClick={showPopup}
          className={
            (workspaceList as WorkspaceType.Workspace[])?.length > 0
              ? 'mt-4'
              : 'mt-2'
          }
        >
          Создать новое пространство
        </Button>
      </div>
      <WorkspacePopup
        onClose={closePopup}
        onSubmit={handleCreateWorkspace}
        active={isPopupActive}
      />
    </div>
  );
};
