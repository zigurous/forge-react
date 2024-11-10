import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from '../src/components/SearchInput';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {},
};
