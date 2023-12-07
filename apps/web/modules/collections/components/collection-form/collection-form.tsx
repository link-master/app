import { RegisterOptions, useForm } from 'react-hook-form';
import { Button, Input } from '@linkmaster/uikit';
import { CollectionType } from '@linkmaster/types';

const validators = {
  name: {
    required: 'У коллекции обязательно должно быть имя :)',
    maxLength: {
      value: 50,
      message: 'Не более 50 символов',
    },
  },
  description: {
    maxLength: {
      value: 100,
      message: 'Не более 100 символов',
    },
  },
} as const satisfies Validations;

export const CollectionForm = ({
  onSubmit,
  initial,
  submitText,
  onClose,
}: CollectionFormProperties) => {
  const { register, handleSubmit, formState } =
    useForm<CollectionType.CollectionFields>({
      values: initial ?? undefined,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Название"
        required
        className="mt-2"
        {...register('name', validators.name)}
        error={formState.errors.name?.message as string}
      />
      <Input
        label="Описание"
        className="mt-2"
        {...register('description', validators.description)}
        error={formState.errors.description?.message as string}
      />
      <div className="flex mt-3 justify-between">
        <Button theme="secondary" onClick={onClose}>
          Закрыть
        </Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          {submitText}
        </Button>
      </div>
    </form>
  );
};

interface CollectionFormProperties {
  onSubmit: (fields: CollectionType.CollectionFields) => void;
  onClose: () => void;
  initial: CollectionType.CollectionFields | null;
  submitText: string;
}

type Validations = Partial<
  Record<
    keyof CollectionType.CollectionFields,
    Partial<
      Pick<
        RegisterOptions,
        'minLength' | 'maxLength' | 'required' | 'validate' | 'pattern'
      >
    >
  >
>;
