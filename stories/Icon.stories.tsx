import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Icon from '../src/components/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const MaterialIcon: Story = {
  args: {
    icon: 'settings',
    size: 'lg',
    type: 'material',
  },
};

export const SocialIcon: Story = {
  args: {
    icon: 'youtube',
    size: 'md',
    type: 'social',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <span>😄</span>,
    size: 'md',
    type: 'custom',
  },
};

export const ColoredIcon: Story = {
  args: {
    backgroundColor: 'danger',
    color: 'white',
    icon: 'priority_high',
    padding: 'xs',
    size: 'sm',
    type: 'material',
    shape: 'circle',
  },
};
