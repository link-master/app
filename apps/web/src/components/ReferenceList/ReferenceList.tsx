import {ReferenceListProps} from "./referenceList.types.ts";
import {ReferenceListItem} from "./ReferenceListItem.tsx";

export const ReferenceList = ({references}: ReferenceListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {references.map(reference =>
        <ReferenceListItem {...reference} key={reference.id}></ReferenceListItem>
      )}
    </div>
  );
};
