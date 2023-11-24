import {storybookThemeArgumentTypes} from "@/data/storybook.ts";
import type { Meta, StoryObj } from '@storybook/react';
import {ComponentProps} from "react";
import { Button } from './button.tsx';

const render = (args: ComponentProps<typeof Button>) => <Button {...args}>Some text</Button>;

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'medium',
    theme: 'primary',
  },
  argTypes: {
    size: storybookThemeArgumentTypes.size,
    theme: storybookThemeArgumentTypes.theme,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

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
