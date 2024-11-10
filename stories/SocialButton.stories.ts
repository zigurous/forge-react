import type { Meta, StoryObj } from '@storybook/react';
import SocialButton from '../src/components/SocialButton';

const meta: Meta<typeof SocialButton> = {
  component: SocialButton,
};

export default meta;

type Story = StoryObj<typeof SocialButton>;

export const Discord: Story = {
  args: {
    children: 'Discord',
    link: 'discord',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Facebook: Story = {
  args: {
    children: 'Facebook',
    link: 'facebook',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Github: Story = {
  args: {
    children: 'GitHub',
    link: 'github',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Instagram: Story = {
  args: {
    children: 'Instagram',
    link: 'instagram',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Patreon: Story = {
  args: {
    children: 'Patreon',
    link: 'patreon',
    shape: 'pill',
    variant: 'outline',
  },
};

export const PayPal: Story = {
  args: {
    children: 'PayPal',
    link: 'paypal',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Twitch: Story = {
  args: {
    children: 'Twitch',
    link: 'twitch',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Twitter: Story = {
  args: {
    children: 'Twitter',
    link: 'twitter',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Unity: Story = {
  args: {
    children: 'Unity',
    link: 'unity',
    shape: 'pill',
    variant: 'outline',
  },
};

export const Youtube: Story = {
  args: {
    children: 'YouTube',
    link: 'youtube',
    shape: 'pill',
    variant: 'outline',
  },
};
