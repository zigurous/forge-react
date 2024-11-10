import React from 'react';
import DefaultRow, { type RowProps } from '../../src/components/Row';

export default function Row(props: RowProps) {
  return (
    <DefaultRow
      {...props}
      style={{
        ...props.style,
        backgroundColor:
          'rgb(from var(--color-surface-1) r g b / var(--opacity-subtle))',
      }}
    />
  );
}
