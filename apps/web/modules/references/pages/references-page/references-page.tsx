import { ReferencePopup } from '@/modules/references/components';
import {
  ReferenceSection,
  ReferenceSectionStub,
} from '@/modules/references/components';
import { referenceDatabaseStore } from '@/modules/references/database';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux.ts';
import {
  addReference,
  selectReferences,
  setRawReferences,
} from '@/modules/references/store';
import { Reference } from '@linkmaster/types';
import { useEffect, useState } from 'react';

export const ReferencesPage = () => {
  const references = useAppSelector(selectReferences);
  const [pastedUrl, setPastedUrl] = useState<string | null>(null);
  const [isCreatingReference, setIsCreatingReference] = useState(false);
  const appDispatch = useAppDispatch();

  const onClose = () => {
    setPastedUrl(null);
    setIsCreatingReference(false);
  };

  useEffect(() => {
    referenceDatabaseStore.list().then((references) => {
      appDispatch(setRawReferences(references));
    });
  }, [appDispatch]);

  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      setPastedUrl(event.clipboardData?.getData('text') ?? '');
      setIsCreatingReference(true);
    };

    addEventListener('paste', onPaste);
    return () => removeEventListener('paste', onPaste);
  }, []);

  const onCreateReference = (reference: Reference.Reference) => {
    appDispatch(addReference(reference));
  };

  return (
    <div className="min-h-screen w-full flex">
      {references.length > 0 ? (
        <ReferenceSection
          references={references}
          onShowCreatePopup={() => setIsCreatingReference(true)}
        />
      ) : (
        <ReferenceSectionStub
          onShowCreatePopup={() => setIsCreatingReference(true)}
        />
      )}

      <ReferencePopup
        onCreate={onCreateReference}
        link={pastedUrl ?? ''}
        onClose={onClose}
        active={isCreatingReference}
      />
    </div>
  );
};
