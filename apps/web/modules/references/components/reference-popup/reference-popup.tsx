import { useAppSelector } from '@/hooks/use-redux.ts';
import { selectCollection } from '@/modules/collections/store';
import { Reference } from '@linkmaster/types';
import { Popup, Heading, Input, Button, Select } from '@linkmaster/uikit';
import {
  FormEvent,
  FormEventHandler,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ReferencePopupProperties extends Partial<Reference.Reference> {
  active: boolean;
  onClose: () => void;
  onCreate: (reference: Reference.Reference) => void;
}

export const ReferencePopup = ({
  active,
  onClose,
  link,
  name,
  onCreate,
}: ReferencePopupProperties) => {
  const nameInputReference = useRef<HTMLInputElement>(null);
  const linkInputReference = useRef<HTMLInputElement>(null);
  const [reference, setReference] = useState<Reference.Reference>({
    name: name ?? '',
    link: link ?? '',
    id: Date.now().toString(),
    parent: '',
  });
  const collections = useAppSelector(selectCollection);

  const collectionOptions = collections.map((collection) => ({
    id: collection.id,
    text: collection.name,
    value: collection.id,
  }));

  useEffect(() => {
    if (nameInputReference.current) {
      nameInputReference.current.value = name ?? '';
      setReference((state) => ({
        ...state,
        name: name ?? '',
      }));
    }
  }, [name]);

  useEffect(() => {
    if (linkInputReference.current) {
      linkInputReference.current.value = link ?? '';
      setReference((state) => ({
        ...state,
        link: link ?? '',
      }));
    }
  }, [link]);

  const handleHotkeys = (event: KeyboardEvent) => {
    event.stopPropagation();
    const isEnter = event.key === 'Enter';
    const isEscape = event.key === 'Escape';

    if (isEnter) {
      handleSubmit();
    }

    if (isEscape) {
      handleCancel();
    }
  };

  const handleSelect = (collection: { id: string }) => {
    setReference((state) => ({
      ...state,
      collection: collection.id,
    }));
  };

  const handleInput: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;

    if (!input.name) {
      return;
    }

    setReference({
      ...reference,
      [input.name]: input.value,
    });
  };

  const handleCancel = (
    event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event?.preventDefault();
    onClose();
  };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    onCreate(reference);
    onClose();
  };

  return (
    <Popup
      active={active}
      className="w-full max-w-[420px]"
      onClose={onClose}
      root="#popup"
    >
      <form onKeyDown={handleHotkeys} onSubmit={handleSubmit}>
        <Heading level={3}>Создание референса</Heading>
        <Input
          label="Название"
          onInput={handleInput}
          name="name"
          id="reference-name-input"
          className="mt-3"
          placeholder="Ваше крутое название референса"
        />
        <Input
          label="Ссылка*"
          innerRef={linkInputReference}
          onInput={handleInput}
          name="link"
          className="mt-3"
          placeholder="Ссылка"
        />
        <Select
          placeholder="Коллекция"
          onChange={handleSelect}
          options={collectionOptions}
        />
        <div className="flex mt-4 justify-between gap-4">
          <Button onClick={handleCancel} theme="secondary">
            Отменить
          </Button>
          <Button>Создать</Button>
        </div>
      </form>
    </Popup>
  );
};
