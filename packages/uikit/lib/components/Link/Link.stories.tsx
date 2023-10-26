import {storybookThemeArgumentTypes} from "@/data/storybook.ts";
import type { Meta, StoryObj } from '@storybook/react';
import {ComponentProps} from "react";
import { Link } from './Link';

const render = (args: ComponentProps<typeof Link>) => <Link {...args}>Some text</Link>;

const meta = {
  title: 'UI/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  args: {
    target: '_blank',
    size: 'medium',
    href: 'https://ya.ru',
  },
  argTypes: {
    size: storybookThemeArgumentTypes.size,
    theme: storybookThemeArgumentTypes.theme,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

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
