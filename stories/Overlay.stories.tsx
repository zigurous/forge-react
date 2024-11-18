import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import React, { Fragment } from 'react';
import Button from '../src/components/Button';
import Overlay from '../src/components/Overlay';

const Decorator = (Story: any, { args }) => {
  const [open, setOpen] = useState(false);
  const onRequestClose = () => setOpen(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open
      </Button>
      <Story args={{ ...args, open, onRequestClose }} />
    </Fragment>
  );
};

const meta: Meta<typeof Overlay> = {
  component: Overlay,
  args: { rootElement: '#portal' },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  args: {},
  decorators: [Decorator],
};

export const LightScrim: Story = {
  args: { scrim: 'light' },
  decorators: [Decorator],
};

export const NotAnimated: Story = {
  args: { animated: false },
  decorators: [Decorator],
};
