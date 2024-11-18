import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import React, { Fragment } from 'react';
import Lightbox from '../src/components/Lightbox';
import Thumbnail from '../src/components/Thumbnail';

const Decorator = (Story: any, { args }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  return (
    <Fragment>
      <div className="flex space-x-md">
        {args.images &&
          args.images.map((src: string, index: number) => {
            return (
              <Thumbnail
                image={{
                  src: src,
                  width: 640,
                  height: 360,
                }}
                key={src}
                onClick={() => setCurrentIndex(index)}
                rounded={args.rounded ?? false}
              />
            );
          })}
      </div>
      <Story
        args={{
          ...args,
          currentIndex,
          onRequestClose: () => setCurrentIndex(-1),
          onChangeImage: (index: number) => setCurrentIndex(index),
          open: currentIndex >= 0,
        }}
      />
    </Fragment>
  );
};

const meta: Meta<typeof Lightbox> = {
  component: Lightbox,
  args: { rootElement: '#portal' },
  decorators: [Decorator],
};

export default meta;

type Story = StoryObj<typeof Lightbox>;

export const Default: Story = {
  args: {
    images: ['https://picsum.photos/seed/10/1280/720'],
  },
};

export const Paginated: Story = {
  args: {
    images: [
      'https://picsum.photos/seed/10/1280/720',
      'https://picsum.photos/seed/100/1280/720',
      'https://picsum.photos/seed/200/1280/720',
    ],
  },
};

export const Looping: Story = {
  args: {
    images: [
      'https://picsum.photos/seed/10/1280/720',
      'https://picsum.photos/seed/100/1280/720',
      'https://picsum.photos/seed/200/1280/720',
    ],
    loop: true,
  },
};

export const Rounded: Story = {
  args: {
    images: [
      'https://picsum.photos/seed/10/1280/720',
      'https://picsum.photos/seed/100/1280/720',
      'https://picsum.photos/seed/200/1280/720',
    ],
    rounded: true,
  },
};

export const DarkScrim: Story = {
  args: {
    scrim: 'dark',
    images: [
      'https://picsum.photos/seed/10/1280/720',
      'https://picsum.photos/seed/100/1280/720',
      'https://picsum.photos/seed/200/1280/720',
    ],
  },
};
