import classNames from 'classnames';
import React from 'react';
import DefaultCol, { type ColProps } from '../../src/components/Col';

export default function Col(props: ColProps) {
  return (
    <DefaultCol
      {...props}
      className={classNames('border bg-surface-1', props.className)}
      style={{
        ...props.style,
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}
