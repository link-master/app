import { useForm } from 'react-hook-form';
import { Input } from '@linkmaster/uikit';
import { Collection } from '@linkmaster/types';

type FormFields = Pick<Collection.Collection, 'name' | 'description'>;

interface AddCollectionFormProperties {
  onSubmit: (fields: FormFields) => void;
  initial?: FormFields;
}

export const AddCollectionForm = ({
  onSubmit,
  initial,
}: AddCollectionFormProperties) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormFields>({
    values: initial,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name')} />
      <Input {...register('description')} />
    </form>
  );
};
