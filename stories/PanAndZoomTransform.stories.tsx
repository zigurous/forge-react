import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import PanAndZoomTransform from '../src/components/PanAndZoomTransform';
import ProgressiveImage from '../src/components/ProgressiveImage';

const meta: Meta<typeof PanAndZoomTransform> = {
  component: PanAndZoomTransform,
};

export default meta;

type Story = StoryObj<typeof PanAndZoomTransform>;

export const Default: Story = {
  render: args => {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <div ref={ref} style={{ width: 960, height: 540 }}>
        <PanAndZoomTransform {...args} container={ref}>
          {panning => (
            <ProgressiveImage
              imageClassName="pointer-events-none select-none"
              src="https://picsum.photos/960/540"
            />
          )}
        </PanAndZoomTransform>
      </div>
    );
  },
};
