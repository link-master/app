import {storybookThemeArgumentTypes} from "@/data/storybook.ts";
import {useArgs} from "@storybook/preview-api";
import type { Meta, StoryObj } from '@storybook/react';
import {ComponentProps, MouseEvent, useRef} from "react";
import { Switch } from './Switch.tsx';

const render = (args: ComponentProps<typeof Switch>) => {
  const [{value}, setArgs] = useArgs();

  const toggle = (state: boolean) => {
    setArgs({value: state});
  }

  return (
    <Switch {...args} value={value} onToggle={toggle} />
  );
}

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  args: {
    theme: "primary",
  },
  argTypes: {
    theme: storybookThemeArgumentTypes.theme,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render,
  args: {
    theme: 'primary',
  },
};

export const Secondary: Story = {
  render,
  args: {
    theme: 'secondary',
  },
};
export default meta;
