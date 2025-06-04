import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import Button from '../src/components/Button';
import Tooltip from '../src/components/Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  render: args => {
    return (
      <div className="flex justify-center align-center w-2xxl h-2xxl">
        <Tooltip {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const ArrowDown: Story = {
  args: {
    arrow: 'down',
    children: 'Tooltip',
  },
};

export const ArrowUp: Story = {
  args: {
    arrow: 'up',
    children: 'Tooltip',
  },
};

export const ArrowRight: Story = {
  args: {
    arrow: 'right',
    children: 'Tooltip',
  },
};

export const ArrowLeft: Story = {
  args: {
    arrow: 'left',
    children: 'Tooltip',
  },
};

export const InfoTooltip: Story = {
  args: {
    children: 'Tooltip',
  },
  render: args => {
    const ref = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);
    return (
      <div ref={ref} style={{ width: '42px', height: '42px' }}>
        <Button
          icon="info_outline"
          iconAlignment="only"
          onMouseEnter={e => setHovering(true)}
          onMouseLeave={e => setHovering(false)}
          size="lg"
          shape="circle"
          variant="unstyled"
        />
        {hovering && <Tooltip {...args} element={ref.current} />}
      </div>
    );
  },
};
