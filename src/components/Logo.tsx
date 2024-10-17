import classNames from 'classnames';
import React from 'react';
import { logo } from '../icons';
import type { PolymorphicProps } from '../types';

export type BaseLogoProps = {
  className?: string;
  fill?: string;
  image?: string;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties;
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
  image,
  label = 'Logo',
  size = 'md',
  style,
  variant = 'wordmark',
  ...rest
}: LogoProps<T>) {
  const Element = as ?? 'a';
  const Icon = image ? undefined : logo[variant];
  return (
    <Element
      aria-label={label}
      className={classNames('logo', variant, size, className)}
      style={{ fill, ...style }}
      {...rest}
    >
      {image && <img alt={label} src={image} />}
      {Icon && <Icon />}
    </Element>
  );
}
