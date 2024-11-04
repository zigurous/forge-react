import classNames from 'classnames';
import React from 'react';

export type ContainerProps = {
  fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
} & React.ComponentPropsWithRef<'div'>;

export default function Container({
  children,
  className,
  fluid,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={classNames(
        {
          container: !fluid,
          [`container-${fluid}`]: fluid && typeof fluid === 'string',
          'container-fluid': fluid && typeof fluid === 'boolean',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
