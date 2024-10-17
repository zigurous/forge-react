import classNames from 'classnames';
import React from 'react';

export type StackProps = {
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  reversed?: boolean;
  wrap?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function Stack({
  alignItems,
  children,
  direction = 'column',
  justifyContent,
  reversed = false,
  wrap = false,
  ...rest
}: StackProps) {
  return (
    <div
      className={classNames(
        'display-flex',
        {
          'flex-row': direction === 'row' && !reversed,
          'flex-row-reverse': direction === 'row' && reversed,
          'flex-column': direction === 'column' && !reversed,
          'flex-column-reverse': direction === 'column' && reversed,
          'flex-wrap': wrap,
        },
        {
          [`justify-content-${justifyContent}`]: justifyContent,
          [`align-items-${alignItems}`]: alignItems,
        },
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
