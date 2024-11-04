import classNames from 'classnames';
import React from 'react';
import { logos } from '../icons';
import type { PolymorphicProps } from '../types';

export type BaseLogoProps = {
  customLogo?: React.ReactNode;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'wordmark' | 'lettermark' | 'logomark';
};

export type LogoProps<T extends React.ElementType = 'a'> = PolymorphicProps<
  T,
  BaseLogoProps
>;

export default function Logo<T extends React.ElementType = 'a'>({
  as,
  className,
  customLogo,
  href = '/',
  label = 'Logo',
  size = 'md',
  variant = 'wordmark',
  ...rest
}: LogoProps<T>) {
  const Element = as ?? 'a';
  const SVG = customLogo ? undefined : logos[variant];
  return (
    <Element
      aria-label={label}
      className={classNames(
        'logo',
        {
          [`logo--${variant}`]: variant,
          [`logo--${size}`]: size,
        },
        className,
      )}
      href={href}
      to={href}
      {...rest}
    >
      {SVG && <SVG />}
      {customLogo}
    </Element>
  );
}
