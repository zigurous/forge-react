import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import React, { Fragment } from 'react';
import Button from '../src/components/Button';
import Drawer from '../src/components/Drawer';

const Decorator = (Story: any, { args }) => {
  const [open, setOpen] = useState(false);
  const onRequestClose = () => setOpen(false);
  return (
    <Fragment>
      <Button
        icon="menu"
        iconAlignment="only"
        onClick={() => setOpen(true)}
        size="lg"
        variant="text"
      />
      <Story args={{ ...args, open, onRequestClose }} />
    </Fragment>
  );
};

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [Decorator],
  args: { rootElement: '#portal' },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Left: Story = {
  args: {
    anchor: 'left',
  },
};

export const Right: Story = {
  args: {
    anchor: 'right',
  },
};

export const Top: Story = {
  args: {
    anchor: 'top',
  },
};

export const Bottom: Story = {
  args: {
    anchor: 'bottom',
  },
};
