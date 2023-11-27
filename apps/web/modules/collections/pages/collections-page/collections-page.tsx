import { ReferencePopup } from '@/components/popup';
import { referenceDatabaseStore } from '@/database/referenceDatabaseStore.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux.ts';
import {
  CollectionsSection,
  CollectionsSectionStub,
} from '@/modules/collections/components';
import {
  addReference,
  setRawReferences,
} from '@/store/features/referenceSlice.ts';
import { Reference } from '@/types/reference.types.ts';
import { useEffect, useState } from 'react';

export const CollectionsPage = () => {
  const references = useAppSelector((state) => state.reference.references);
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

  const onCreateReference = (reference: Reference) => {
    appDispatch(addReference(reference));
  };

  return (
    <div className="min-h-screen w-full flex">
      {references.length > 0 ? (
        <CollectionsSection
          collections={references}
          onShowCreatePopup={() => setIsCreatingReference(true)}
        />
      ) : (
        <CollectionsSectionStub
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
