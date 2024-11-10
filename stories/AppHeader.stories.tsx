import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AppHeader from '../src/components/AppHeader';
import Badge from '../src/components/Badge';
import Button from '../src/components/Button';
import ButtonGroup from '../src/components/ButtonGroup';
import Logo from '../src/components/Logo';
import NavBar from '../src/components/NavBar';
import SocialIcons from '../src/components/SocialIcons';

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
  render: args => <AppHeader {...args} className="border" />,
};

export default meta;

type Story = StoryObj<typeof AppHeader>;

export const Basic: Story = {
  args: {
    left: <Logo size="sm" />,
    right: (
      <NavBar
        links={[
          {
            href: '/?path=/story/appheader--basic#home',
            name: 'Home',
          },
          {
            href: '/?path=/story/appheader--basic#about',
            name: 'About',
          },
          {
            href: '/?path=/story/appheader--basic#contact',
            name: 'Contact',
          },
        ]}
      />
    ),
  },
};

export const NavIcons: Story = {
  args: {
    left: <Logo size="sm" />,
    right: (
      <NavBar
        links={[
          {
            href: '/?path=/story/appheader--nav-icons#home',
            name: 'Home',
            icon: 'home',
          },
          {
            href: '/?path=/story/appheader--nav-icons#games',
            name: 'Games',
            icon: 'games',
          },
          {
            href: '/?path=/story/appheader--nav-icons#profile',
            name: 'Profile',
            icon: 'person',
          },
          {
            href: '/?path=/story/appheader--nav-icons#settings',
            name: 'Settings',
            icon: 'settings',
          },
        ]}
      />
    ),
  },
};

export const MenuButton: Story = {
  args: {
    left: <Logo size="sm" />,
    right: (
      <>
        <NavBar
          className="mr-xs"
          links={[
            {
              href: '/?path=/story/appheader--menu-button#about',
              name: 'About',
            },
            {
              href: '/?path=/story/appheader--menu-button#contact',
              name: 'Contact',
            },
          ]}
          variant="link"
        />
        <Button icon="menu" iconAlignment="only" size="lg" variant="text" />
      </>
    ),
  },
};

export const Socials: Story = {
  args: {
    left: <Logo size="sm" />,
    center: (
      <NavBar
        links={[
          {
            href: '/?path=/story/appheader--socials#home',
            name: 'Home',
          },
          {
            href: '/?path=/story/appheader--socials#games',
            name: 'Games',
          },
          {
            href: '/?path=/story/appheader--socials#assets',
            name: 'Assets',
          },
          {
            href: '/?path=/story/appheader--socials#tutorials',
            name: 'Tutorials',
          },
        ]}
      />
    ),
    right: (
      <SocialIcons
        iconPadding="0.5rem"
        iconSize="sm"
        links={['youtube', 'twitch', 'discord', 'twitter', 'github']}
      />
    ),
  },
};

export const CallToAction: Story = {
  args: {
    fluid: true,
    left: <Logo variant="lettermark" />,
    center: (
      <NavBar
        links={[
          {
            href: '/?path=/story/appheader--call-to-action#features',
            name: 'Features',
          },
          {
            href: '/?path=/story/appheader--call-to-action#pricing',
            name: 'Pricing',
          },
          {
            href: '/?path=/story/appheader--call-to-action#support',
            name: 'Support',
          },
          {
            href: '/?path=/story/appheader--call-to-action#blog',
            name: 'Blog',
          },
        ]}
        variant="link"
      />
    ),
    right: (
      <Button
        icon="email"
        iconAlignment="leading"
        iconProps={{ variant: 'outlined' }}
        shape="pill"
        size="sm"
      >
        Contact
      </Button>
    ),
  },
};

export const LogIn: Story = {
  args: {
    fluid: true,
    left: (
      <NavBar
        links={[
          {
            href: '/?path=/story/appheader--log-in#products',
            name: 'Products',
          },
          {
            href: '/?path=/story/appheader--log-in#pricing',
            name: 'Pricing',
          },
          {
            href: '/?path=/story/appheader--log-in#company',
            name: 'Company',
          },
        ]}
        variant="link"
      />
    ),
    center: <Logo variant="logomark" />,
    right: (
      <ButtonGroup spacing="sm" nowrap>
        <Button size="sm" variant="text">
          Log In
        </Button>
        <Button
          icon="east"
          iconAlignment="trailing"
          size="sm"
          variant="outline"
        >
          Sign Up
        </Button>
      </ButtonGroup>
    ),
    sizing: { left: '5', center: '2', right: '5' },
  },
};

export const Shopping: Story = {
  args: {
    fluid: true,
    left: <Logo variant="logomark" />,
    center: (
      <NavBar
        links={[
          {
            href: '/?path=/story/appheader--shopping#pricing',
            name: 'Categories',
            icon: 'menu',
          },
          {
            href: '/?path=/story/appheader--shopping#pricing',
            name: 'Shop',
            icon: 'keyboard_arrow_down',
            iconAlignment: 'trailing',
          },
          {
            href: '/?path=/story/appheader--shopping#products',
            name: 'Customize',
          },
          {
            href: '/?path=/story/appheader--shopping#company',
            name: 'Discounts',
          },
        ]}
      />
    ),
    right: (
      <ButtonGroup spacing="0" nowrap>
        <Button
          icon="search"
          iconAlignment="only"
          iconProps={{ size: 20 }}
          variant="text"
        />
        <Button className="text-xs uppercase" size="sm" variant="text">
          Cart
          <Badge className="ml-sm" color="primary" shape="circle" size="xs">
            1
          </Badge>
        </Button>
      </ButtonGroup>
    ),
    sizing: { left: '2', center: '8', right: '2' },
  },
};

export const Magazine: Story = {
  args: {
    fluid: true,
    left: <Button icon="menu" iconAlignment="only" size="lg" variant="text" />,
    center: <Logo />,
    right: (
      <Button icon="search" iconAlignment="only" size="lg" variant="text" />
    ),
  },
};
