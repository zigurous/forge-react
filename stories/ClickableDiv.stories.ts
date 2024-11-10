import type { Meta, StoryObj } from '@storybook/react';
import ClickableDiv from '../src/components/ClickableDiv';

const meta: Meta<typeof ClickableDiv> = {
  component: ClickableDiv,
};

export default meta;

type Story = StoryObj<typeof ClickableDiv>;

export const Default: Story = {
  args: {
    children: 'Click me',
    className:
      'flex justify-center align-center w-full bg-surface-1 text-muted font-600',
    onClick: () => alert('Clicked'),
    style: {
      height: '200px',
    },
  },
};
