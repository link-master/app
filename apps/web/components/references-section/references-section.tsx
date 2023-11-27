import { ReferenceItem } from '@/components/reference-item';
import { Reference } from '@/types/reference.types.ts';
import { GridList } from '@/widgets/grid-list';
import { Button } from '@linkmaster/uikit';

interface ReferencesSectionProperties {
  onShowCreatePopup: () => void;
  references: Reference[];
}

export const ReferencesSection = ({
  onShowCreatePopup,
  references,
}: ReferencesSectionProperties) => {
  const referenceList = references.map((reference) => (
    <ReferenceItem key={reference.id} {...reference} />
  ));

  return (
    <div className="grow p-4">
      <GridList>{referenceList}</GridList>
      <Button
        size="small"
        className="fixed bottom-4 right-4"
        onClick={onShowCreatePopup}
      >
        Добавить референс
      </Button>
    </div>
  );
};
