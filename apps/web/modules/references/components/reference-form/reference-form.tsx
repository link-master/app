import { useAppSelector } from '@/hooks/use-redux.ts';
import { selectCollection } from '@/modules/collections/store';
import { ReferenceType } from '@linkmaster/types';
import { Button, Input, Select, mapToSelect } from '@linkmaster/uikit';
import { MouseEvent } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface ReferenceAddFormProperties {
  initial?: ReferenceType.ReferenceFields | null;
  onSubmit: SubmitHandler<ReferenceType.ReferenceFields>;
  onClose: () => void;
  submitText: string;
}

export const ReferenceForm = ({
  onSubmit,
  initial,
  onClose,
  submitText,
}: ReferenceAddFormProperties) => {
  const { handleSubmit, control, register } =
    useForm<ReferenceType.ReferenceFields>({
      values: initial ?? undefined,
      shouldUseNativeValidation: false,
    });

  const collections = useAppSelector(selectCollection);
  const collectionOptions = [
    {
      value: 'default',
      text: 'Общая коллекция',
    },
    ...mapToSelect(collections, 'id', 'name'),
  ];

  const handleCancel = (event: MouseEvent) => {
    event.preventDefault();
    onClose();
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
          {submitText}
        </Button>
      </div>
    </form>
  );
};
