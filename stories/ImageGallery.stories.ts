import type { Meta, StoryObj } from '@storybook/react';
import ImageGallery from '../src/components/ImageGallery';

const meta: Meta<typeof ImageGallery> = {
  component: ImageGallery,
  args: {
    lightboxProps: {
      rootElement: '#portal',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageGallery>;

export const ThreeColumn: Story = {
  name: '3-Column',
  args: {
    columns: 3,
    images: [
      'https://picsum.photos/seed/1/1280/720',
      'https://picsum.photos/seed/2/1280/720',
      'https://picsum.photos/seed/3/1280/720',
      'https://picsum.photos/seed/4/1280/720',
      'https://picsum.photos/seed/5/1280/720',
      'https://picsum.photos/seed/6/1280/720',
    ],
  },
};

export const TwoColumn: Story = {
  name: '2-Column',
  args: {
    columns: 2,
    images: [
      'https://picsum.photos/seed/1/1280/720',
      'https://picsum.photos/seed/2/1280/720',
      'https://picsum.photos/seed/3/1280/720',
      'https://picsum.photos/seed/4/1280/720',
      'https://picsum.photos/seed/5/1280/720',
      'https://picsum.photos/seed/6/1280/720',
    ],
  },
};

export const HeroImage: Story = {
  args: {
    columns: 3,
    fullWidthFirstItem: true,
    images: [
      'https://picsum.photos/seed/7/1920/1080',
      'https://picsum.photos/seed/1/1280/720',
      'https://picsum.photos/seed/2/1280/720',
      'https://picsum.photos/seed/3/1280/720',
      'https://picsum.photos/seed/4/1280/720',
      'https://picsum.photos/seed/5/1280/720',
      'https://picsum.photos/seed/6/1280/720',
    ],
  },
};
