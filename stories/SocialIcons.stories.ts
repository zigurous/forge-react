import type { Meta, StoryObj } from '@storybook/react';
import SocialIcons from '../src/components/SocialIcons';

const meta: Meta<typeof SocialIcons> = {
  component: SocialIcons,
};

export default meta;

type Story = StoryObj<typeof SocialIcons>;

export const Supported: Story = {
  args: {
    links: [
      'email',
      'discord',
      'facebook',
      'github',
      'instagram',
      'patreon',
      'paypal',
      'twitch',
      'twitter',
      'unity',
      'youtube',
    ],
  },
};
