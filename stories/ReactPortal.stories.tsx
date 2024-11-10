import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReactPortal from '../src/components/ReactPortal';

const meta: Meta<typeof ReactPortal> = {
  component: ReactPortal,
  args: { rootElement: '#portal' },
};

export default meta;

type Story = StoryObj<typeof ReactPortal>;

export const Example: Story = {
  args: {
    children: (
      <div className="text-lg">
        Hey, wait a minute, this doesn't belong here!
      </div>
    ),
  },
};
