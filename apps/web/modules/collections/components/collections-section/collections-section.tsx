import { Collection } from '@/modules/collections/components/collection';
import { CollectionsSectionProperties } from './collections-section.types.ts';
import { LineList } from '@/widgets/line-list';
import { Button } from '@linkmaster/uikit';

export const CollectionsSection = ({
  collections,
  onShowCreatePopup,
}: CollectionsSectionProperties) => {
  const collectionList = collections.map((collection) => (
    <Collection key={collection.id} {...collection} />
  ));

  return (
    <div className="grow p-4">
      <LineList>{collectionList}</LineList>
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
