import type { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import React from 'react';
import DefaultFlexGroup, { type FlexGroupProps } from '../src/components/FlexGroup'; // prettier-ignore

const FlexGroup = (props: FlexGroupProps) => {
  return (
    <DefaultFlexGroup
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

const meta: Meta<typeof DefaultFlexGroup> = {
  component: DefaultFlexGroup,
  render: args => {
    return (
      <FlexGroup spacing="md" {...args}>
        <Child>Item 1</Child>
        <Child>Item 2</Child>
        <Child>Item 3</Child>
      </FlexGroup>
    );
  },
};

export default meta;

type Story = StoryObj<typeof DefaultFlexGroup>;

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
      <FlexGroup {...args}>
        <Child style={{ height: '2rem' }}>Item 1</Child>
        <Child style={{ height: '4rem' }}>Item 2</Child>
        <Child style={{ height: '3rem' }}>Item 3</Child>
      </FlexGroup>
    );
  },
};
