import { useForm } from 'react-hook-form';
import { Button, Input } from '@linkmaster/uikit';
import { Collection } from '@linkmaster/types';

interface CollectionFormProperties {
  onSubmit: (fields: Collection.CollectionFields) => void;
  onClose: () => void;
  initial: Collection.CollectionFields | null;
  submitText: string;
}

export const CollectionForm = ({
  onSubmit,
  initial,
  submitText,
  onClose,
}: CollectionFormProperties) => {
  const { register, handleSubmit } = useForm<Collection.CollectionFields>({
    values: initial ?? undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Название" required className="mt-2" {...register('name')} />
      <Input label="Описание" className="mt-2" {...register('description')} />
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
