import { Reference } from '@/modules/references/components';
import { ReferenceType } from '@linkmaster/types';
import { GridList } from '@/widgets/grid-list';
import { Button } from '@linkmaster/uikit';

interface ReferencesSectionProperties {
  onShowCreatePopup: () => void;
  references: ReferenceType.Reference[];
}

export const ReferenceSection = ({
  onShowCreatePopup,
  references,
}: ReferencesSectionProperties) => {
  const referenceList = references.map((reference) => (
    <Reference key={reference.id} {...reference} />
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
