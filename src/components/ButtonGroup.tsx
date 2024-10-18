import classNames from 'classnames';
import React from 'react';

export type ButtonGroupProps = {
  layout?: 'horizontal' | 'vertical';
} & React.ComponentPropsWithRef<'div'>;

export default function ButtonGroup({
  children,
  className,
  layout = 'horizontal',
  ...rest
}: ButtonGroupProps) {
  return (
    <div
      className={classNames(
        'btn-group',
        { [`btn-group--${layout}`]: layout },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
