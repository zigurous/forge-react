import type { Meta, StoryObj } from '@storybook/react';
import AppFooter from '../src/components/AppFooter';

const meta: Meta<typeof AppFooter> = {
  component: AppFooter,
};

export default meta;

type Story = StoryObj<typeof AppFooter>;

export const Basic: Story = {
  args: {
    theme: 'high-contrast',
  },
};

export const WithLinks: Story = {
  args: {
    links: [
      {
        href: '/?path=/story/appfooter--with-links#terms-of-service',
        name: 'Terms of Service',
      },
      {
        href: '/?path=/story/appfooter--with-links#privacy-policy',
        name: 'Privacy Policy',
      },
      { href: '/?path=/story/appfooter--with-links#contact', name: 'Contact' },
    ],
    theme: 'high-contrast',
  },
};
