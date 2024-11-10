import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import EmbeddedVideo from '../src/components/EmbeddedVideo';
import EmbeddedYouTube from '../src/components/EmbeddedYouTube';
import EmbeddedTwitch from '../src/components/EmbeddedTwitch';

const meta: Meta<typeof EmbeddedVideo> = {
  component: EmbeddedVideo,
};

export default meta;

type Story = StoryObj<typeof EmbeddedVideo>;

export const Youtube: Story = {
  args: {},
  render: args => (
    <EmbeddedYouTube origin="https://zigurous.com" videoId="" {...args} />
  ),
};

export const Twitch: Story = {
  args: {},
  render: args => <EmbeddedTwitch channel="zigurous" {...args} />,
};
