import type { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import React from 'react';
import DefaultStack, { type StackProps } from '../src/components/Stack'; // prettier-ignore

const Stack = (props: StackProps) => {
  return (
    <DefaultStack
      className="bg-surface-1 p-md"
      style={{ minHeight: props.align ? '6rem' : undefined }}
      {...props}
    />
  );
};

const Child = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={classNames(
        'px-sm py-xxs bg-surface-2 border rounded',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

const meta: Meta<typeof DefaultStack> = {
  component: DefaultStack,
  render: args => {
    return (
      <Stack spacing="md" {...args}>
        <Child>Item 1</Child>
        <Child>Item 2</Child>
        <Child>Item 3</Child>
      </Stack>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DefaultStack>;

export const Default: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
};

export const Inline: Story = {
  args: {
    inline: true,
  },
};

export const Reversed: Story = {
  args: {
    reverse: true,
  },
};

export const JustifyStart: Story = {
  args: {
    justify: 'start',
  },
};

export const JustifyEnd: Story = {
  args: {
    justify: 'end',
  },
};

export const JustifyCenter: Story = {
  args: {
    justify: 'center',
  },
};

export const JustifyBetween: Story = {
  args: {
    justify: 'between',
  },
};

export const JustifyAround: Story = {
  args: {
    justify: 'around',
  },
};

export const JustifyEvenly: Story = {
  args: {
    justify: 'evenly',
  },
};

export const AlignStart: Story = {
  args: {
    align: 'start',
  },
};

export const AlignEnd: Story = {
  args: {
    align: 'end',
  },
};

export const AlignCenter: Story = {
  args: {
    align: 'center',
  },
};

export const AlignStretch: Story = {
  args: {
    align: 'stretch',
  },
};

export const AlignBaseline: Story = {
  args: {
    align: 'baseline',
  },
  render: args => {
    return (
      <Stack {...args}>
        <Child style={{ height: '2rem' }}>Item 1</Child>
        <Child style={{ height: '4rem' }}>Item 2</Child>
        <Child style={{ height: '3rem' }}>Item 3</Child>
      </Stack>
    );
  },
};
