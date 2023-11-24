import {storybookThemeArgumentTypes} from "@/data/storybook.ts";
import type { Meta, StoryObj } from '@storybook/react';
import {ComponentProps} from "react";
import { Text } from './text.tsx';

const render = (args: ComponentProps<typeof Text>) => <Text {...args}>Some text</Text>;

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: {
    theme: "primary",
    size: "medium",
  },
  argTypes: {
    size: storybookThemeArgumentTypes.size,
    theme: storybookThemeArgumentTypes.theme,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

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
