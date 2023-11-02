import {CollectionListProps} from "@/components/CollectionList/collectionList.types.ts";
import {CollectionListItem} from "./CollectionListItem.tsx";

export const CollectionList = ({collections}: CollectionListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {collections.map(collection =>
        <CollectionListItem {...collection} key={collection.id} />
      )}
    </div>
  );
};
