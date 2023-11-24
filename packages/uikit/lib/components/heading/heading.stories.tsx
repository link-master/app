import { storybookThemeArgumentTypes } from '@/data/storybook.ts';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Heading } from './heading.tsx';

const render = (arguments_: ComponentProps<typeof Heading>) => (
  <Heading {...arguments_}>Some Heading</Heading>
);

const meta = {
  title: 'UI/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  args: {
    theme: 'primary',
    level: 1,
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4],
      control: { type: 'select' },
    },
    theme: storybookThemeArgumentTypes.theme,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const Level1: Story = {
  render,
  args: {
    level: 1,
  },
};

export const Level2: Story = {
  render,
  args: {
    level: 2,
  },
};

export const Level3: Story = {
  render,
  args: {
    level: 3,
  },
};

export const Level4: Story = {
  render,
  args: {
    level: 4,
  },
};

export default meta;
