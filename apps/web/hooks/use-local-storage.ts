import { useState } from 'react';
import { WorkspaceType, CommonType } from '@linkmaster/types';

export enum LocalStorageKey {
  tutorial = 'tutorial',
  currentWorkspace = 'currentWorkspaceId',
  workspaces = 'workspaces',
}

interface LocalStoragePair {
  [LocalStorageKey.tutorial]: boolean;
  [LocalStorageKey.currentWorkspace]: CommonType.Identificator;
  [LocalStorageKey.workspaces]: WorkspaceType.Workspace[];
}

const useLocalStorage = (key: keyof LocalStoragePair) => {
  type StateType = LocalStoragePair[typeof key] | null;

  const rawLocalStorageValue = localStorage.getItem(key);
  const [value, setValue] = useState<StateType>(
    rawLocalStorageValue ? JSON.parse(rawLocalStorageValue) : null
  );

  const update = (value: StateType) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, update] as const;
};

export default useLocalStorage;
