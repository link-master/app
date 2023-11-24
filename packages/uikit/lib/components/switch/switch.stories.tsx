import { storybookThemeArgumentTypes } from '@/data/storybook.ts';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Switch } from './switch.tsx';

const Render = (arguments_: ComponentProps<typeof Switch>) => {
  const [{ value }, setArguments] = useArgs();

  const toggle = (state: boolean) => {
    setArguments({ value: state });
  };

  return <Switch {...arguments_} value={value} onToggle={toggle} />;
};

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    theme: 'primary',
  },
  argTypes: {
    theme: storybookThemeArgumentTypes.theme,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: Render,
  args: {
    theme: 'primary',
  },
};

export const Secondary: Story = {
  render: Render,
  args: {
    theme: 'secondary',
  },
};
export default meta;
