import { Button, Input } from '@linkmaster/uikit';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { WorkspaceType } from '@linkmaster/types';

interface WorkspaceFormProperties {
  onSubmit: (fields: WorkspaceType.WorkspaceFields) => void;
  onCancel: () => void;
  initial?: WorkspaceType.WorkspaceFields;
}
export const WorkspaceForm: FC<WorkspaceFormProperties> = ({
  onCancel,
  initial,
  onSubmit,
}) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<WorkspaceType.WorkspaceFields>({ values: initial });

  // TODO Add submit handle for <form>
  return (
    <form
      className="flex flex-col gap-2 mt-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Название"
        placeholder="Учеба"
        {...register('name', {
          required: {
            value: true,
            message: 'У пространства должно быть имя :)',
          },
          maxLength: {
            value: 50,
            message: 'Максимум 50 символов',
          },
        })}
        error={errors.name?.message as string}
      />
      <Input
        placeholder="std"
        label="Сокращение"
        {...register('slug', {
          required: {
            value: true,
            message: 'У пространства должно быть сокращение :)',
          },
          pattern: {
            value: /[A-Za-z]/,
            message: 'Только латинские символы',
          },
          maxLength: {
            value: 5,
            message: 'Максимум 5 символов',
          },
        })}
        error={errors.slug?.message as string}
      />
      <div className="flex justify-between gap-2 mt-2">
        <Button onClick={onCancel} theme="secondary">
          Отменить
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Создать</Button>
      </div>
    </form>
  );
};
