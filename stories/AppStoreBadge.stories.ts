import type { Meta, StoryObj } from '@storybook/react';
import AppStoreBadge from '../src/components/AppStoreBadge';

const meta: Meta<typeof AppStoreBadge> = {
  component: AppStoreBadge,
};

export default meta;

type Story = StoryObj<typeof AppStoreBadge>;

export const AppStore: Story = {
  args: {
    platform: 'ios',
    url: 'https://www.apple.com/app-store/',
  },
};

export const GooglePlay: Story = {
  args: {
    platform: 'android',
    url: 'https://play.google.com/store',
  },
};
