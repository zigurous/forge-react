import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '../src/components/Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Off: Story = {
  args: {
    toggled: false,
  },
};

export const On: Story = {
  args: {
    toggled: true,
  },
};

export const LabelTrailing: Story = {
  args: {
    label: 'Label',
    labelAlignment: 'trailing',
  },
};

export const LabelLeading: Story = {
  args: {
    label: 'Label',
    labelAlignment: 'leading',
  },
};
