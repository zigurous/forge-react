import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../src/components/Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Solid: Story = {
  args: {
    children: 'Badge',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
};

export const Tint: Story = {
  args: {
    children: 'Badge',
    variant: 'tint',
    color: 'primary',
  },
};

export const Interactive: Story = {
  args: {
    children: 'Badge',
    icon: 'sort',
    iconAlignment: 'trailing',
    interactive: true,
    color: 'primary',
    variant: 'tint',
  },
};

export const Number: Story = {
  args: {
    children: '99',
    color: 'danger',
    variant: 'solid',
    shape: 'circle',
    size: 'xs',
  },
};
