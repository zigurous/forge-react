import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Input from '../src/components/Input';
import SearchInput from '../src/components/SearchInput';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: 'Name',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
  },
};

export const Search: Story = {
  args: {},
  render: args => <SearchInput {...args} />,
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};

export const Time: Story = {
  args: {
    type: 'time',
  },
};

export const Color: Story = {
  args: {
    style: { width: '80px' },
    type: 'color',
  },
};
