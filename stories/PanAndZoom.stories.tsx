import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';
import PanAndZoomProvider, { PanAndZoomTransform } from '../src/components/PanAndZoom'; // prettier-ignore
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
      <PanAndZoomProvider
        {...args}
        ref={ref}
        style={{ width: 960, height: 540 }}
      >
        {(state, panning, resetMap) => (
          <PanAndZoomTransform>
            <ProgressiveImage
              imageClassName="pointer-none select-none"
              src="https://picsum.photos/960/540"
            />
          </PanAndZoomTransform>
        )}
      </PanAndZoomProvider>
    );
  },
};
