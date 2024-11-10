import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
};

export const Display: Story = {
  args: {
    type: 'display',
  },
};

export const TitleLarge: Story = {
  args: {
    type: 'title-lg',
  },
};

export const TitleMedium: Story = {
  args: {
    type: 'title-md',
  },
};

export const TitleSmall: Story = {
  args: {
    type: 'title-sm',
  },
};

export const Subtitle: Story = {
  args: {
    type: 'subtitle',
  },
};

export const BodyLarge: Story = {
  args: {
    type: 'body-lg',
  },
};

export const BodyMedium: Story = {
  args: {
    type: 'body-md',
  },
};

export const BodySmall: Story = {
  args: {
    type: 'body-sm',
  },
};

export const Caption: Story = {
  args: {
    type: 'caption',
  },
};

export const Eyebrow: Story = {
  args: {
    type: 'eyebrow',
  },
};
