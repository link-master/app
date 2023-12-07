import {
  ReferenceSection,
  ReferenceSectionStub,
} from '@/modules/references/components';
import { useAppSelector } from '@/hooks/use-redux.ts';
import { selectReferences } from '@/modules/references/store';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const ReferencesPage = () => {
  const references = useAppSelector(selectReferences);

  return (
    <div className="min-h-screen w-full flex">
      {references.length > 0 ? <ReferenceSection /> : <ReferenceSectionStub />}
    </div>
  );
};
