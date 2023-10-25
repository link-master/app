import {storybookThemeArgumentTypes} from "@/data/storybook.ts";
import type { Meta, StoryObj } from '@storybook/react';
import {ComponentProps} from "react";
import { Card } from './Card';
import {Text} from "@/components/Text";

const render = (args: ComponentProps<typeof Card>) => (
  <Card {...args}>
    <Text>Some Text!</Text>
  </Card>
);

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  args: {
    padding: 'medium',
  },
  argTypes: {
    padding: storybookThemeArgumentTypes.size,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render,
  args: {
    padding: 'medium',
  },
};

export default meta;
