import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Badge from '../src/components/Badge';
import BadgeGroup from '../src/components/BadgeGroup';

const meta: Meta<typeof BadgeGroup> = {
  component: BadgeGroup,
  render: args => (
    <BadgeGroup {...args}>
      <Badge color="primary" variant="tint">
        JavaScript
      </Badge>
      <Badge color="primary" variant="tint">
        HTML
      </Badge>
      <Badge color="primary" variant="tint">
        CSS
      </Badge>
    </BadgeGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof BadgeGroup>;

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
};
