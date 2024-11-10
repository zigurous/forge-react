import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../src/components/Button';
import ButtonGroup from '../src/components/ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button variant="solid">Primary</Button>
      <Button variant="outline">Secondary</Button>
      <Button variant="link">Tertiary</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
  render: args => (
    <ButtonGroup {...args}>
      <Button variant="solid">Primary</Button>
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
};
