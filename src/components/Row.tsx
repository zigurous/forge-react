import classNames from 'classnames';
import React from 'react';
import type { SpacingToken } from '../types';

export type RowProps = {
  gutters?: SpacingToken | 'none';
} & React.ComponentPropsWithRef<'div'>;

export default function Row({
  children,
  className,
  gutters,
  ...rest
}: RowProps) {
  return (
    <div
      className={classNames(
        'row',
        { [`gutters-${gutters}`]: gutters },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
