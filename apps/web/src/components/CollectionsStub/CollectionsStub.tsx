import librarySvg from "@/assets/library.svg";
import {CollectionsStubProps} from "./collectionsStub.types.ts";
import {Button, Heading} from "@linkmaster/uikit";

export const CollectionsStub = ({onCreate}: CollectionsStubProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <img className="w-96 mix-blend-darken opacity-20" src={librarySvg} />
      <Heading className="mt-6" level={2}>Коллекции не найдены</Heading>
      <Button onClick={onCreate} className="mt-3">Добавить коллекцию</Button>
    </div>
  );
};
