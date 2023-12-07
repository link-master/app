import { useAppSelector } from '@/hooks/use-redux.ts';
import { selectCollection } from '@/modules/collections/store';
import { URL_REGEX } from '@/modules/references/data';
import { ReferenceType } from '@linkmaster/types';
import { Button, Input, Select, mapToSelect } from '@linkmaster/uikit';
import { MouseEvent } from 'react';
import {
  Controller,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

const validators = {
  name: {
    maxLength: {
      value: 100,
      message: 'Не более 100 символов',
    },
  },
  link: {
    required: 'Ссылку нужно ввести обязательно :)',
    pattern: {
      value: URL_REGEX,
      message: 'Ссылка должна быть корректной',
    },
  },
} as const satisfies Validations;

export const ReferenceForm = ({
  onSubmit,
  initial,
  onClose,
  submitText,
}: ReferenceAddFormProperties) => {
  const { handleSubmit, control, register, formState } =
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
      <Input
        className="mt-2"
        error={formState.errors.name?.message as string}
        {...register('name', validators.name)}
        label="Название"
      />
      <Input
        className="mt-2"
        error={formState.errors.link?.message as string}
        {...register('link', validators.link)}
        required
        label="Ссылка"
      />
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

interface ReferenceAddFormProperties {
  initial?: ReferenceType.ReferenceFields | null;
  onSubmit: SubmitHandler<ReferenceType.ReferenceFields>;
  onClose: () => void;
  submitText: string;
}

type Validations = Partial<
  Record<
    keyof ReferenceType.ReferenceFields,
    Partial<
      Pick<
        RegisterOptions,
        'minLength' | 'maxLength' | 'required' | 'validate' | 'pattern'
      >
    >
  >
>;
