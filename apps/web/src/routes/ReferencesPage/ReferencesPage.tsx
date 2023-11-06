import {CreateReferencePopup} from "@/components/CreateReferencePopup";
import {useAppDispatch, useAppSelector} from "@/store";
import {referenceSlice} from "@/store/features/reference/referenceSlice.ts";
import {Reference} from "@/types/reference.types.ts";
import {Button} from "@linkmaster/uikit";
import {useState} from "react";

export const ReferencesPage = () => {
  const references = useAppSelector(selector => selector.reference.value);
  const dispatch = useAppDispatch();
  const [isCreatingReference, setIsCreatingReference] = useState(false);

  const onCreateReference = async (reference: Reference) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(referenceSlice.actions.add(reference));
  };

  return (
    <div className="h-screen w-screen p-8">
      {JSON.stringify(references)}
      <Button
        size="small"
        onClick={() => setIsCreatingReference(true)}
        className="fixed bottom-4 right-4"
      >
        Добавить коллекцию
      </Button>
      <CreateReferencePopup
        active={isCreatingReference}
        onCreated={onCreateReference}
        onClose={() => setIsCreatingReference(false)}
      />
    </div>
  );
};
