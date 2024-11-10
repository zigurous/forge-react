import type { Meta, StoryObj } from '@storybook/react';
import ProgressiveImage from '../src/components/ProgressiveImage';

const meta: Meta<typeof ProgressiveImage> = {
  component: ProgressiveImage,
};

export default meta;

type Story = StoryObj<typeof ProgressiveImage>;

export const Placeholder: Story = {
  args: {
    width: 480,
    height: 270,
    src: 'https://picsum.photos/960/540',
    placeholder: 'https://placehold.co/480x270/f5f7fa/d7dce0?text=\\n',
  },
};

export const NoPlaceholder: Story = {
  args: {
    width: 480,
    height: 270,
    src: 'https://picsum.photos/960/540',
  },
};

export const LoadingSpinner: Story = {
  args: {
    width: 480,
    height: 270,
    src: 'https://picsum.photos/960/540',
    placeholder: 'https://placehold.co/480x270/f5f7fa/d7dce0?text=\\n',
    showLoadingSpinner: true,
  },
};
