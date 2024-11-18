import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Badge from '../src/components/Badge';
import Stack from '../src/components/Stack';

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

export const BadgeGroup: Story = {
  render: args => {
    return (
      <Stack spacing="sm" wrap>
        <Badge color="primary" variant="tint">
          Badge
        </Badge>
        <Badge color="primary" variant="tint">
          Badge
        </Badge>
        <Badge color="primary" variant="tint">
          Badge
        </Badge>
      </Stack>
    );
  },
};
