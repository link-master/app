import {AVAILABLE_INPUT_TYPES} from "@/components/Input/input.data.ts";
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import {ComponentProps, FormEvent} from "react";
import { Input } from './input.tsx';

const render = (args: ComponentProps<typeof Input>) => {
  const [{value}, setValue] = useArgs();
  const onInput = (event: FormEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value);
    setValue({value: (event.target as HTMLInputElement).value});
  };

  return (
    <Input {...args} onInput={onInput} value={value}  />
  );
}

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'text',
  },
  argTypes: {
    type: {
      options: AVAILABLE_INPUT_TYPES,
      control: {type: 'select'},
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render,
  args: {
    value: 'Default input with text',
  },
};

export const WithErrors: Story = {
  render,
  args: {
    value: 'Default input with errors',
    errors: ['One error'],
  },
};

export const WithPlaceholder: Story = {
  render,
  args: {
    value: '',
    placeholder: "Some text",
  },
};

export const LabeledInput: Story = {
  render,
  args: {
    value: 'tokiory!',
    label: 'Nickname'
  },
};

export default meta;
