import classNames from 'classnames';
import React from 'react';
import { SpacingToken } from '../types';

export type ButtonGroupProps = {
  align?: 'center' | 'start' | 'end' | 'stretch';
  layout?: 'horizontal' | 'vertical';
  nowrap?: boolean;
  spacing?: SpacingToken | '0' | 0;
} & React.ComponentPropsWithRef<'div'>;

export default function ButtonGroup({
  align = 'center',
  children,
  className,
  layout = 'horizontal',
  nowrap = false,
  spacing = 'md',
  style,
  ...rest
}: ButtonGroupProps) {
  return (
    <div
      className={classNames(
        'btn-group',
        {
          [`btn-group--${layout}`]: layout,
          [`align-${align}`]: align,
          'flex-nowrap': nowrap,
        },
        className,
      )}
      style={{ gap: `var(--spacing-${spacing})`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
