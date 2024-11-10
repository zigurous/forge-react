import type { Meta, StoryObj } from '@storybook/react';
import Thumbnail from '../src/components/Thumbnail';

const meta: Meta<typeof Thumbnail> = {
  component: Thumbnail,
};

export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  args: {
    href: '/?path=/story/thumbnail--default',
    image: 'https://picsum.photos/480/270',
  },
};

export const Disabled: Story = {
  args: {
    href: '/?path=/story/thumbnail--disabled',
    image: 'https://picsum.photos/480/270',
    disabled: true,
  },
};

export const Unstyled: Story = {
  args: {
    animated: false,
    href: '/?path=/story/thumbnail--unstyled',
    image: 'https://picsum.photos/480/270',
    rounded: false,
    shadow: false,
  },
};
