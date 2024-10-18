import classNames from 'classnames';
import React from 'react';

export type BadgeGroupProps = {
  layout?: 'horizontal' | 'vertical';
} & React.ComponentPropsWithRef<'div'>;

export default function BadgeGroup({
  children,
  className,
  layout = 'horizontal',
  ...rest
}: BadgeGroupProps) {
  return (
    <div
      className={classNames(
        'badge-group',
        { [`badge-group--${layout}`]: layout },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
