import {CreateReferencePopup} from "@/components/CreateReferencePopup";
import {Card, Text, Button, Heading} from "@linkmaster/uikit";
import {useState} from "react";

export const Tutorial = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [isReferencePopupVisible, setIsReferencePopupVisible] = useState(false);

    const slides = [
    (
        <>
          <Heading className="text-center font-semibold">Linkmaster</Heading>
          <Text className="mt-3">
            Привет! Мы рады что вы выбрали Linkmaster, для того чтобы хранить все ссылки, которые найдете во время ваших ресерчей!
          </Text>
          <Text className="mt-3">
            Прежде чем начать пользоваться Linkmaster - давайте пройдем маленький туториал, это не займет много времени 😉
          </Text>
        </>
    ),
    (
        <>
          <Heading className="text-center font-semibold">Для чего нужен Linkmaster?</Heading>
          <Text className="mt-3">
            Linkmaster - ваш личный помощник для хранения разнообразной информации в виде ссылок и заметок.
          </Text>
          <Text className="mt-3">
            Приложение нужно только для того чтобы сохранять референсы для информации и показывать вам их в удобном формате.
          </Text>
        </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Что такое "Референсы"?</Heading>
        <Text className="mt-3">
          <Text inline bold>Референсы</Text> - это ссылки, по которым вы должны перейти. Вы можете установить дату к которой вам нужно прочитать определенную
          ссылку или перенести референс в специальный раздел "ASAP". Ссылки из ASAP будут показываться на домашней странице.
        </Text>
        <Text className="mt-3">
          Приложение предоставляет вам коллекции и референсы. Внутри коллекций вы можете хранить
          столько ссылок, сколько вам угодно.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Что такое "Рефы"?</Heading>
        <Text className="mt-3">
          <Text inline bold>Рефы</Text> - специальный тип данных, который является условным референсом. Вы можете использовать рефы
          тогда, когда обычные референсы не подходят.
        </Text>
        <Text className="mt-3">
          Основное преимущество рефов - то что они не должны быть ссылками. Вы сами можете задать шаблон для рефа и использовать его.
          С помощью рефов удобно хранить информацию о книгах, фильмах и тому подобное.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Безопасность</Heading>
        <Text className="mt-3">
          Linkmaster хранит все данные только на вашем устройстве. Именно поэтому у Linkmaster нет "бесшовной" синхронизации.
        </Text>
        <Text className="mt-3">
          Вы можете использовать синхронизацию через Google Drive или Github для того чтобы получить синхронизацию между несколькими устройствами.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Подписка</Heading>
        <Text className="mt-3">
          По умолчанию вы ограничены всего тремя пространствами, тремя шаблонами для рефа и неограниченным количеством референсов и рефов.
        </Text>
        <Text className="mt-3">
          Вы можете приобрести подписку для того чтобы получить доступ к неограниченным пространствам и шаблонам, а также другим фичам.
        </Text>
      </>
    ),
    (
      <>
        <Heading className="text-center font-semibold">Готово!</Heading>
        <Text className="mt-3">
          Вот и все, вы можете начинать пользоваться Linkmaster. Данный туториал исчезнет сразу же после добавления первого референса.
        </Text>
        <Text className="mt-3">
          Вы можете добавить данное приложение в закладки, чтобы не потерять его или установить его прямо в браузер (в случае если вы пользуетесь Google Chrome).
        </Text>
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
          <Button className="w-full" onClick={() => setIsReferencePopupVisible(true)}>Добавить референс</Button>
        </div>
      );

  return (
    <>
      <Card className="flex flex-col justify-between w-[624px] h-[285px]">
        {slides[slideIndex]}
        {slideButtons}
      </Card>
      <CreateReferencePopup
        active={isReferencePopupVisible}
        onClose={() => setIsReferencePopupVisible(false)}
      />
    </>
  );
};
