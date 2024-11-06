import classNames from 'classnames';
import React from 'react';
import type { PolymorphicProps } from '../types';

export type BaseLinkProps = {
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  href?: string;
  rel?: string;
  target?: string;
  underlined?: boolean;
  unstyled?: boolean;
};

export type LinkProps<T extends React.ElementType = 'a'> = PolymorphicProps<
  T,
  BaseLinkProps
>;

export default function Link<T extends React.ElementType = 'a'>({
  as,
  children,
  className,
  external = false,
  href,
  rel,
  target,
  underlined = false,
  unstyled = false,
  ...rest
}: LinkProps<T>) {
  const Element = as ?? 'a';
  return (
    <Element
      className={classNames(
        {
          link: !unstyled,
          'link--underlined': underlined && !unstyled,
        },
        className,
      )}
      href={href}
      rel={rel || (external ? 'noopener noreferrer' : undefined)}
      target={target || (external ? '_blank' : undefined)}
      to={href}
      {...rest}
    >
      {children}
    </Element>
  );
}
