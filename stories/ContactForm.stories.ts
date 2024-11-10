import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from '../src/components/ContactForm';

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Example: Story = {
  args: {},
};
