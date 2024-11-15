import classNames from 'classnames';
import React from 'react';
import type { SpacingToken } from '../types';

export type FlexGroupProps = {
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  layout?: 'horizontal' | 'vertical';
  reverse?: boolean;
  spacing?: SpacingToken | '0' | 0;
  wrap?: boolean | 'reverse';
} & React.ComponentPropsWithRef<'div'>;

export default function FlexGroup({
  align = 'start',
  children,
  className,
  inline = false,
  justify,
  layout = 'horizontal',
  reverse = false,
  spacing,
  style,
  wrap = false,
  ...rest
}: FlexGroupProps) {
  return (
    <div
      className={classNames(
        {
          flex: !inline,
          'inline-flex': inline,
          'flex-row': layout === 'horizontal' && !reverse,
          'flex-row-reverse': layout === 'horizontal' && reverse,
          'flex-col': layout === 'vertical' && !reverse,
          'flex-col-reverse': layout === 'vertical' && reverse,
          'flex-wrap': wrap === true,
          'flex-wrap-reverse': wrap === 'reverse',
          [`justify-${justify}`]: justify,
          [`align-${align}`]: align,
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
