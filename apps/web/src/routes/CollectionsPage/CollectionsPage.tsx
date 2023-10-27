import {Heading, Button} from "@linkmaster/uikit";

export const CollectionsPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-screen">
      <img className="w-96 mix-blend-darken opacity-20" src="/library.svg" />
      <Heading className="mt-6" level={2}>Коллекции не найдены</Heading>
      <Button className="mt-3">Добавить коллекцию</Button>
    </div>
  );
};
