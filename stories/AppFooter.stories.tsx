import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AppFooter from '../src/components/AppFooter';
import Link from '../src/components/Link';
import Logo from '../src/components/Logo';
import Stack from '../src/components/Stack';

const meta: Meta<typeof AppFooter> = {
  component: AppFooter,
  render: args => <AppFooter {...args} className="border text-xs font-500" />,
};

const links = [
  {
    href: '/?path=/story/appfooter--with-links#terms-of-service',
    name: 'Terms of Service',
  },
  {
    href: '/?path=/story/appfooter--with-links#privacy-policy',
    name: 'Privacy Policy',
  },
  {
    href: '/?path=/story/appfooter--with-links#contact',
    name: 'Contact',
  },
];

export default meta;

type Story = StoryObj<typeof AppFooter>;

export const Basic: Story = {
  args: {
    left: (
      <Stack align="center">
        <Logo size="xs" />
        <span className="copyright mx-xl">
          Copyright <span aria-hidden>©</span> {new Date().getFullYear()} All
          Rights Reserved
        </span>
      </Stack>
    ),
  },
};

export const WithLinks: Story = {
  args: {
    left: (
      <Stack align="center">
        <Logo size="xs" />
        <span className="copyright mx-xl">
          Copyright <span aria-hidden>©</span> {new Date().getFullYear()} All
          Rights Reserved
        </span>
      </Stack>
    ),
    right: (
      <Stack align="center" className="links" wrap>
        {links.map(link => (
          <Link className="text-inherit mx-sm" href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </Stack>
    ),
  },
};
