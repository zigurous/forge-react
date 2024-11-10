import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from '../src/components/LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  args: {},
};
