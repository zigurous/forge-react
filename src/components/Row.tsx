import classNames from 'classnames';
import React from 'react';

export type RowProps = {
  gutters?: 'sm' | 'md' | 'lg' | 'none';
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
