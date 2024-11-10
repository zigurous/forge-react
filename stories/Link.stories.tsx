import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Icon from '../src/components/Icon';
import Link from '../src/components/Link';

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Link',
    href: '/?path=/story/link--default',
  },
};

export const External: Story = {
  args: {
    className: 'inline-flex align-baseline',
    children: (
      <>
        Link&#160;
        <Icon icon="open_in_new" />
      </>
    ),
    external: true,
    href: 'https://zigurous.com',
  },
};

export const Underline: Story = {
  args: {
    children: 'Link',
    href: '/?path=/story/link--underline',
    underline: true,
  },
};

export const Unstyled: Story = {
  args: {
    children: 'Link',
    href: '/?path=/story/link--unstyled',
    unstyled: true,
  },
};
