import {
  ReferenceSection,
  ReferenceSectionStub,
} from '@/modules/references/components';
import { referenceDatabaseStore } from '@/modules/references/database';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts';
import { selectReferences, setRawReferences } from '@/modules/references/store';
import { useEffect } from 'react';

export const ReferencesPage = () => {
  const references = useAppSelector(selectReferences);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    referenceDatabaseStore.list().then((references) => {
      appDispatch(setRawReferences(references));
    });
  }, [appDispatch]);

  return (
    <div className="min-h-screen w-full flex">
      {references.length > 0 ? <ReferenceSection /> : <ReferenceSectionStub />}
    </div>
  );
};
