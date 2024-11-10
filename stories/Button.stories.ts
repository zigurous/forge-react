import type { Meta, StoryObj } from '@storybook/react';
import Button from '../src/components/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Text: Story = {
  args: {
    children: 'Button',
    variant: 'text',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const LeadingIcon: Story = {
  args: {
    children: 'Button',
    icon: 'menu',
    iconAlignment: 'leading',
  },
};

export const TrailingIcon: Story = {
  args: {
    children: 'Button',
    icon: 'logout',
    iconAlignment: 'trailing',
  },
};

export const IconOnly: Story = {
  args: {
    icon: 'close',
    iconAlignment: 'only',
    shape: 'circle',
  },
};
