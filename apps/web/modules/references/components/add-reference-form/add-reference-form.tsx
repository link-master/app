import { useAppSelector } from '@/hooks/use-redux.ts';
import { selectCollection } from '@/modules/collections/store';
import { ReferenceType } from '@linkmaster/types';
import { Button, Input, Select, type SelectOption } from '@linkmaster/uikit';
import { MouseEvent } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type ReferenceFormFields = Omit<ReferenceType.Reference, 'id' | 'name'> & {
  name?: string;
};

interface ReferenceAddFormProperties {
  defaults?: ReferenceFormFields;
  onSubmit: SubmitHandler<ReferenceFormFields>;
  onCancel: () => void;
}

export const AddReferenceForm = ({
  onSubmit,
  defaults,
  onCancel,
}: ReferenceAddFormProperties) => {
  const { handleSubmit, control, register } = useForm<ReferenceFormFields>({
    values: {
      name: defaults?.name || '',
      link: defaults?.link || '',
      parent: defaults?.parent || '',
    },
    shouldUseNativeValidation: false,
  });

  const collections = useAppSelector(selectCollection);
  const collectionOptions: SelectOption[] = [
    {
      value: 'default',
      text: 'Общая коллекция',
    },
    ...collections.map((collection) => {
      return {
        value: collection.id,
        text: collection.name,
      };
    }),
  ];

  const handleCancel = (event: MouseEvent) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input className="mt-2" {...register('name')} label="Название" />
      <Input className="mt-2" {...register('link')} required label="Ссылка" />
      <Controller
        control={control}
        name="parent"
        render={({ field }) => (
          <Select
            {...field}
            className="mt-2"
            options={collectionOptions}
            label="Коллекция"
          />
        )}
      />

      <div className="flex justify-between mt-3">
        <Button theme="secondary" onClick={handleCancel}>
          Отменить
        </Button>
        <Button onClick={handleSubmit(onSubmit)} type="submit">
          Создать
        </Button>
      </div>
    </form>
  );
};
