import { SelectOption } from '@/components/select/select.types';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { ComponentProps } from 'react';
import { Select } from './select';

const Render = (arguments_: ComponentProps<typeof Select>) => {
  const [{ value }, setValue] = useArgs();

  const onChange = (option: SelectOption) => {
    setValue({ ...arguments_, value: option.value });
  };

  return <Select {...arguments_} onChange={onChange} value={value} />;
};

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: Render,
  args: {
    options: [
      {
        text: 'Первое значение',
        value: 'first',
      },
      {
        text: 'Второе значение',
        value: 'second',
      },
    ],
  },
};

export const WithLabel: Story = {
  render: Render,
  args: {
    label: 'Значения',
    options: [
      {
        text: 'Первое значение',
        value: 'first',
      },
      {
        text: 'Второе значение',
        value: 'second',
      },
    ],
  },
};

export default meta;
