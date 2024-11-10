import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '../src/components/NavBar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    links: [
      {
        href: '/?path=/story/navbar--default#home',
        name: 'Home',
      },
      {
        href: '/?path=/story/navbar--default#games',
        name: 'Games',
      },
      {
        href: '/?path=/story/navbar--default#games',
        name: 'Search',
      },
      {
        href: '/?path=/story/navbar--default#profile',
        name: 'Profile',
      },
      {
        href: '/?path=/story/navbar--default#settings',
        name: 'Settings',
      },
    ],
  },
};

export const Links: Story = {
  args: {
    links: [
      {
        href: '/?path=/story/navbar--links#home',
        name: 'Home',
      },
      {
        href: '/?path=/story/navbar--links#games',
        name: 'Games',
      },
      {
        href: '/?path=/story/navbar--links#games',
        name: 'Search',
      },
      {
        href: '/?path=/story/navbar--links#profile',
        name: 'Profile',
      },
      {
        href: '/?path=/story/navbar--links#settings',
        name: 'Settings',
      },
    ],
    variant: 'link',
  },
};

export const Icons: Story = {
  args: {
    links: [
      {
        href: '/?path=/story/navbar--icons#home',
        name: 'Home',
        icon: 'home',
      },
      {
        href: '/?path=/story/navbar--icons#games',
        name: 'Games',
        icon: 'games',
      },
      {
        href: '/?path=/story/navbar--icons#games',
        name: 'Search',
        icon: 'search',
      },
      {
        href: '/?path=/story/navbar--icons#profile',
        name: 'Profile',
        icon: 'person',
      },
      {
        href: '/?path=/story/navbar--icons#settings',
        name: 'Settings',
        icon: 'settings',
      },
    ],
  },
};
