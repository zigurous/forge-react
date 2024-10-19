import classNames from 'classnames';
import React from 'react';

export type IconProps = {
  ariaHidden?: boolean;
  children?: React.ReactNode;
  className?: string;
  inactive?: boolean;
  material?: boolean;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit' | number;
  theme?: 'light' | 'dark';
} & React.ComponentPropsWithRef<'i'>;

export default function Icon({
  ariaHidden = true,
  children,
  className,
  inactive,
  material = true,
  name,
  size = 'md',
  style,
  theme,
  ...rest
}: IconProps) {
  return (
    <i
      aria-hidden={ariaHidden}
      className={classNames(
        'icon',
        { [`icon--${size}`]: size && typeof size !== 'number' },
        { [`icon--${theme}`]: theme },
        { 'icon--active': !inactive },
        { 'icon--inactive': inactive },
        { 'icon--material': material },
        className,
      )}
      style={{
        width: typeof size === 'number' ? `${size}px` : undefined,
        height: typeof size === 'number' ? `${size}px` : undefined,
        ...style,
      }}
      {...rest}
    >
      {name || children}
    </i>
  );
}
