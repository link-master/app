import { WorkspaceForm } from '@/modules/workspaces/components';
import { WorkspaceType } from '@linkmaster/types';
import { FC } from 'react';
import { Heading, Popup } from '@linkmaster/uikit';

interface WorkspacePopupProperties {
  onClose: () => void;
  onSubmit: (fields: WorkspaceType.WorkspaceFields) => void;
  active: boolean;
}

export const WorkspacePopup: FC<WorkspacePopupProperties> = ({
  onClose,
  active,
  onSubmit,
}) => {
  const handleSubmit = (fields: WorkspaceType.WorkspaceFields) => {
    onSubmit(fields);
    onClose();
  };
  return (
    <Popup className="w-[420px]" onClose={onClose} active={active}>
      <Heading level={2}>Создание пространства</Heading>
      <WorkspaceForm onSubmit={handleSubmit} onCancel={onClose} />
    </Popup>
  );
};
