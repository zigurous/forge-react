import classNames from 'classnames';
import React from 'react';

export type IconProps = {
  ariaHidden?: boolean;
  children?: React.ReactNode;
  className?: string;
  inactive?: boolean;
  material?: boolean;
  name?: string;
  size?: 'inherit' | 'sm' | 'md' | 'lg' | 'xl';
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
  theme,
  ...rest
}: IconProps) {
  return (
    <i
      aria-hidden={ariaHidden}
      className={classNames(
        'icon',
        { [`icon--${size}`]: size },
        { [`icon--${theme}`]: theme },
        { 'icon--active': !inactive },
        { 'icon--inactive': inactive },
        { 'icon--material': material },
        className,
      )}
      {...rest}
    >
      {name || children}
    </i>
  );
}
