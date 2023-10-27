import {Text, Button} from "@linkmaster/uikit";

export const NavigationSynchronization = () => {
  return (
    <div className="border-t py-4 px-5">
      <Text bold>
        Синхронизация отключена
      </Text>
      <Text className="mt-2" theme="secondary" size="small">
        В данный момент все референсы, шаблоны и коллекции которые вы создали
        в данной сессии хранятся локально в вашем браузере
      </Text>
      <Button className="w-fit mt-4" size="small">
        Включить сихронизацию
      </Button>
    </div>
  );
};
