import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import React, { Fragment } from 'react';
import Button from '../src/components/Button';
import FlexGroup from '../src/components/FlexGroup';
import Modal from '../src/components/Modal';

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

const DecoratorWithFooter = (Story: any, { args }) => {
  const [open, setOpen] = useState(false);
  const onRequestClose = () => setOpen(false);
  return (
    <Fragment>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open
      </Button>
      <Story
        args={{
          ...args,
          open,
          onRequestClose,
          footer: (
            <FlexGroup spacing="md">
              <Button variant="outline" onClick={onRequestClose}>
                Cancel
              </Button>
              <Button variant="solid" onClick={onRequestClose}>
                Submit
              </Button>
            </FlexGroup>
          ),
        }}
      />
    </Fragment>
  );
};

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: { rootElement: '#portal' },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tincidunt augue eleifend, fringilla nisl eu, ultrices tellus. Sed tempor
        luctus aliquam. Quisque in lacus dui. Quisque eu varius nibh. Nunc ut
        eros nec diam dapibus pharetra vel at nibh. Cras magna lectus,
        ullamcorper id feugiat eget, suscipit ac orci.
      </p>
    ),
  },
  decorators: [Decorator],
};

export const Title: Story = {
  args: {
    title: 'Title',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tincidunt augue eleifend, fringilla nisl eu, ultrices tellus. Sed tempor
        luctus aliquam. Quisque in lacus dui. Quisque eu varius nibh. Nunc ut
        eros nec diam dapibus pharetra vel at nibh. Cras magna lectus,
        ullamcorper id feugiat eget, suscipit ac orci.
      </p>
    ),
  },
  decorators: [Decorator],
};

export const Footer: Story = {
  args: {
    title: 'Title',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tincidunt augue eleifend, fringilla nisl eu, ultrices tellus. Sed tempor
        luctus aliquam. Quisque in lacus dui. Quisque eu varius nibh. Nunc ut
        eros nec diam dapibus pharetra vel at nibh. Cras magna lectus,
        ullamcorper id feugiat eget, suscipit ac orci.
      </p>
    ),
  },
  decorators: [DecoratorWithFooter],
};
