import classNames from 'classnames';
import React from 'react';

export type StackProps = {
  alignItems?: 'normal' | 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  justifyContent?:
    | 'normal'
    | 'center'
    | 'start'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
    | 'baseline';
  reversed?: boolean;
  wrap?: boolean | 'reverse' | 'nowrap';
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
      className={classNames('flex', {
        'flex-row': direction === 'row' && !reversed,
        'flex-row-reverse': direction === 'row' && reversed,
        'flex-col': direction === 'column' && !reversed,
        'flex-col-reverse': direction === 'column' && reversed,
        'flex-wrap': typeof wrap === 'boolean' && wrap,
        'flex-wrap-reverse': wrap === 'reverse',
        'flex-nowrap': wrap === 'nowrap',
        [`justify-${justifyContent}`]: justifyContent,
        [`align-${alignItems}`]: alignItems,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
