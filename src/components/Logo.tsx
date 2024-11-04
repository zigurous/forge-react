import classNames from 'classnames';
import React from 'react';
import { logo } from '../icons';
import type { PolymorphicProps } from '../types';

export type BaseLogoProps = {
  fill?: string;
  image?: string;
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
  fill,
  href = '/',
  image,
  label = 'Logo',
  size = 'md',
  style,
  to,
  variant = 'wordmark',
  ...rest
}: LogoProps<T>) {
  const Element = as ?? 'a';
  const SVG = image ? undefined : logo[variant];
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
      href={Element === 'a' ? href : undefined}
      style={{ fill, ...style }}
      to={Element !== 'a' ? href : undefined}
      {...rest}
    >
      {image && <img alt={label} src={image} />}
      {SVG && <SVG />}
    </Element>
  );
}
