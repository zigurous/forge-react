import type { Meta, StoryObj } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import React from 'react';
import Pagination from '../src/components/Pagination';

const Decorator = (Story: any, { args }) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Story args={{ ...args, currentPage, onPageChange: setCurrentPage }} />
  );
};

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  decorators: [Decorator],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    pageCount: 5,
  },
};

export const TextVariant: Story = {
  args: {
    pageCount: 10,
    variant: 'text',
  },
};

export const HidePages: Story = {
  args: {
    pageCount: 5,
    hidePageButtons: true,
  },
};
