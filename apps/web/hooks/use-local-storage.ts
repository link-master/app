import { useState } from 'react';

export enum LocalStorageKey {
  tutorial = 'tutorial',
  currentWorkspace = 'workspace',
}

interface LocalStoragePair {
  [LocalStorageKey.tutorial]: boolean;
  [LocalStorageKey.currentWorkspace]: boolean;
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
