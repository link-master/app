import { useForm } from 'react-hook-form';
import { Button, Input } from '@linkmaster/uikit';
import { CollectionType } from '@linkmaster/types';

interface CollectionFormProperties {
  onSubmit: (fields: CollectionType.CollectionFields) => void;
  onClose: () => void;
  initial: CollectionType.CollectionFields | null;
  submitText: string;
}

export const CollectionForm = ({
  onSubmit,
  initial,
  submitText,
  onClose,
}: CollectionFormProperties) => {
  const { register, handleSubmit } = useForm<CollectionType.CollectionFields>({
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
