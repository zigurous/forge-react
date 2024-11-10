import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import React, { Fragment } from 'react';
import Button from '../src/components/Button';
import NavMenu from '../src/components/NavMenu';

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

const meta: Meta<typeof NavMenu> = {
  component: NavMenu,
  decorators: [Decorator],
  args: { rootElement: '#portal' },
};

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  args: {
    links: [
      {
        href: '/?path=/story/navmenu--default#home',
        name: 'Home',
      },
      {
        href: '/?path=/story/navmenu--default#games',
        name: 'Games',
      },
      {
        href: '/?path=/story/navmenu--default#games',
        name: 'Search',
      },
      {
        href: '/?path=/story/navmenu--default#profile',
        name: 'Profile',
      },
      {
        href: '/?path=/story/navmenu--default#settings',
        name: 'Settings',
      },
    ],
  },
};

export const SocialIcons: Story = {
  args: {
    links: [
      {
        href: '/?path=/story/navmenu--center-aligned#home',
        name: 'Home',
      },
      {
        href: '/?path=/story/navmenu--center-aligned#games',
        name: 'Games',
      },
      {
        href: '/?path=/story/navmenu--center-aligned#games',
        name: 'Search',
      },
      {
        href: '/?path=/story/navmenu--center-aligned#profile',
        name: 'Profile',
      },
      {
        href: '/?path=/story/navmenu--center-aligned#settings',
        name: 'Settings',
      },
    ],
    socialLinks: ['youtube', 'twitch', 'discord', 'twitter', 'github'],
  },
};

export const LeftAligned: Story = {
  args: {
    alignment: 'left',
    links: [
      {
        href: '/?path=/story/navmenu--left-aligned#home',
        name: 'Home',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#games',
        name: 'Games',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#games',
        name: 'Search',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#profile',
        name: 'Profile',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#settings',
        name: 'Settings',
      },
    ],
  },
};

export const RightAligned: Story = {
  args: {
    alignment: 'right',
    links: [
      {
        href: '/?path=/story/navmenu--left-aligned#home',
        name: 'Home',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#games',
        name: 'Games',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#games',
        name: 'Search',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#profile',
        name: 'Profile',
      },
      {
        href: '/?path=/story/navmenu--left-aligned#settings',
        name: 'Settings',
      },
    ],
  },
};
