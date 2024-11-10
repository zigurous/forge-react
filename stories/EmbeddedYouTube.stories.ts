import type { Meta, StoryObj } from '@storybook/react';
import EmbeddedYouTube from '../src/components/EmbeddedYouTube';

const meta: Meta<typeof EmbeddedYouTube> = {
  component: EmbeddedYouTube,
};

export default meta;

type Story = StoryObj<typeof EmbeddedYouTube>;

export const Example: Story = {
  args: {
    origin: 'https://zigurous.com',
    videoId: '',
  },
};
