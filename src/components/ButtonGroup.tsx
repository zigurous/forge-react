import classNames from 'classnames';
import React from 'react';

export type ButtonGroupProps = {
  align?: 'center' | 'start' | 'end' | 'stretch';
  layout?: 'horizontal' | 'vertical';
} & React.ComponentPropsWithRef<'div'>;

export default function ButtonGroup({
  align = 'center',
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
        { [`align-${align}`]: align },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
