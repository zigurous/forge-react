import classNames from 'classnames';
import React from 'react';

export type BadgeProps = {
  pill?: boolean;
  selected?: boolean;
  type?: 'solid' | 'outline';
} & React.ComponentPropsWithRef<'div'>;

export default function Badge({
  children,
  className,
  pill = false,
  selected = false,
  type = 'solid',
  ...rest
}: BadgeProps) {
  return (
    <div
      className={classNames(
        'badge',
        { [`badge--${type}`]: type },
        { 'badge--pill': pill },
        { 'badge--selected': selected },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
