import {CreateReferencePopup} from "@/components/CreateReferencePopup";
import {CreateRefPopup} from "@/components/CreateRefPopup";
import {TutorialUserData} from "@/components/Tutorial/tutorial.types.ts";
import {Card, Text, Button, Heading, Input} from "@linkmaster/uikit";
import {Switch} from "@linkmaster/uikit";
import {useState} from "react";

export const Tutorial = () => {

  const [userData, setUserData] = useState<TutorialUserData>({
    workspaceName: ''
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const [isReferencePopupVisible, setIsReferencePopupVisible] = useState(false);
  const [isRefPopupVisible, setIsRefPopupVisible] = useState(false);
  const [hasToDeleteTutorialItems, setHasToDeleteTutorialItems] = useState(false);

  const closeTutorial = () => {

  };

  const slides = [
    (
      <>
        <Heading className="text-center font-semibold">Linkmaster</Heading>
        <Text className="mt-3">
          Привет! Мы рады что вы выбрали Linkmaster, для того чтобы хранить все ссылки, которые найдете во время ваших
          ресерчей!
        </Text>
        <Text className="mt-3">
          Прежде чем начать пользоваться Linkmaster - давайте пройдем маленький туториал, это не займет много времени 😉
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Пространство</Heading>
        <Text className="mt-3">
          Все данные в Linkmaster хранятся в пространствах, это нужно для того чтобы вы
          отделяли "личное от рабочего". Вы можете хранить все для работы в одном пространстве, а для хобби в другом.
        </Text>
        <Input
          value={userData.workspaceName}
          label="Имя для пространства"
          onInput={ev => setUserData({workspaceName: (ev.target as HTMLInputElement).value})}
          placeholder="Введите имя для своего первого пространства"
          className="w-full mt-3"
        />
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Что такое "Референсы"?</Heading>
        <Text className="mt-3">
          <Text inline bold>Референсы</Text> - это ссылки, по которым вы должны перейти. Вы можете установить дату к
          которой вам нужно прочитать определенную
          ссылку или перенести референс в специальный раздел "ASAP". Ссылки из ASAP будут показываться на домашней
          странице.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Референсы</Heading>
        <Text className="mt-3">
          Давайте создадим один референс для того познакомиться с интерфейсом. Создать референс достаточно легко - просто нажмите на кнопку.
        </Text>
        <Button className="w-full mt-3" onClick={() => setIsReferencePopupVisible(true)}>Создать референс 💫</Button>
        <CreateReferencePopup
          name="Linkmaster - Приложение для хранения ссылок"
          url="https://linkmaster.vercel.app"
          active={isReferencePopupVisible}
          onClose={() => setIsReferencePopupVisible(false)}
        />
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Что такое "Рефы"?</Heading>
        <Text className="mt-3">
          <Text inline bold>Рефы</Text> - специальный тип данных, который является условным референсом. Вы можете
          использовать рефы тогда, когда обычные референсы не подходят.
        </Text>
        <Text className="mt-1">
          Основное преимущество рефов - то что они не должны быть ссылками. Вы сами можете задать шаблон для рефа и
          использовать его.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Рефы</Heading>
        <Text className="mt-3">
          Теперь давайте создадим один реф, просто кликните на кнопку, после нажатия вы увидите окошко для создания рефа, ничего нового😉
        </Text>
        <Button className="w-full mt-3" onClick={() => setIsRefPopupVisible(true)}>Создать реф ✨</Button>
        <CreateRefPopup
          active={isRefPopupVisible}
          onClose={() => setIsRefPopupVisible(false)}
        />
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Подписка</Heading>
        <Text className="mt-3">
          По умолчанию вы ограничены одним пространством, двумя коллекциями, тремя шаблонами для рефа и неограниченным количеством
          референсов и рефов.
        </Text>
        <Text className="mt-3">
          Вы можете приобрести подписку для того чтобы получить доступ к неограниченным пространствам и шаблонам, а
          также другим фичам.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Готово!</Heading>
        <Text className="mt-3">
          Вот и все, вы можете начинать пользоваться Linkmaster!
        </Text>
        <Text className="mt-3">
          Вы можете добавить данное приложение в закладки, чтобы не потерять его или установить его прямо в браузер.
        </Text>
        <div className="mt-3 flex gap-2">
          <Switch
            value={hasToDeleteTutorialItems}
            onToggle={() => setHasToDeleteTutorialItems(!hasToDeleteTutorialItems)}
          />
          <Text>
            Удалить записи, которые были созданы во время туториала
          </Text>
        </div>
      </>
    ),
  ];

  const slideButtons = slideIndex + 1 < slides.length ?
    (
      <div className="flex mt-auto">
        {slideIndex > 0 &&
          <Button theme="secondary" onClick={() => setSlideIndex(slideIndex - 1)}>Назад</Button>
        }
        <Button className="ml-auto" onClick={() => setSlideIndex(slideIndex + 1)}>Далее</Button>
      </div>
    ) :
    (
      <div className="flex gap-4 mt-8">
        <Button theme="secondary" onClick={() => setSlideIndex(slideIndex - 1)}>Назад</Button>
        <Button className="w-full" onClick={closeTutorial}>Закрыть туториал</Button>
      </div>
    );

  return (
    <>
      <Card className="flex flex-col justify-between w-[624px] h-[285px]">
        {slides[slideIndex]}
        {slideButtons}
      </Card>
    </>
  );
};
