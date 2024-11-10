import type { Meta, StoryObj } from '@storybook/react';
import EmbeddedTwitch from '../src/components/EmbeddedTwitch';

const meta: Meta<typeof EmbeddedTwitch> = {
  component: EmbeddedTwitch,
};

export default meta;

type Story = StoryObj<typeof EmbeddedTwitch>;

export const Example: Story = {
  args: {
    channel: 'zigurous',
  },
};
