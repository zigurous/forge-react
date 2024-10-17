import classNames from 'classnames';
import React from 'react';

export type ButtonGroupProps = {
  layout?: 'horizontal' | 'vertical';
  spacing?: boolean;
} & React.ComponentPropsWithRef<'div'>;

export default function ButtonGroup({
  children,
  className,
  layout = 'horizontal',
  spacing = true,
  ...rest
}: ButtonGroupProps) {
  return (
    <div
      className={classNames(
        'btn-group',
        { [`btn-group--${layout}`]: layout },
        { 'btn-group--spacing': spacing },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
