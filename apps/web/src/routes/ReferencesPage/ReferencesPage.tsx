import {CreateReferencePopup} from "@/components/CreateReferencePopup";
import {useAtom} from "@/hooks/useAtom.ts";
import referenceStore from "@/stores/reference.store.ts";
import {Reference} from "@/types/reference.types.ts";
import {Button} from "@linkmaster/uikit";
import {useState} from "react";

export const ReferencesPage = () => {
  const references = useAtom(referenceStore);
  const [isCreatingReference, setIsCreatingReference] = useState(false);

  const onCreateReference = async (reference: Reference) => {
    referenceStore.add(reference);
  };

  return (
    <div className="h-screen w-screen p-8">

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
