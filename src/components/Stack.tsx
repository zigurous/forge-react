import classNames from 'classnames';
import React from 'react';
import type { SpacingToken } from '../types';

export type StackProps = {
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

export default function Stack({
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
}: StackProps) {
  return (
    <div
      className={classNames(className, {
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
      })}
      style={{
        gap: spacing ? `var(--spacing-${spacing})` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
