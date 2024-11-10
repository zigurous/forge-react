import type { Meta, StoryObj } from '@storybook/react';
import CookieConsent from '../src/components/CookieConsent';

const meta: Meta<typeof CookieConsent> = {
  component: CookieConsent,
  args: {
    className: 'relative',
    rootElement: '#story--cookieconsent--example--primary-inner',
  },
};

export default meta;

type Story = StoryObj<typeof CookieConsent>;

export const Example: Story = {
  args: {},
};
