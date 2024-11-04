import classNames from 'classnames';
import React from 'react';
import type { PolymorphicProps } from '../types';

export type BaseLinkProps = {
  activeClassName?: string;
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  rel?: string;
  target?: string;
  to?: string;
  underlined?: boolean;
  unstyled?: boolean;
};

export type LinkProps<T extends React.ElementType = 'a'> = PolymorphicProps<
  T,
  BaseLinkProps
>;

export default function Link<T extends React.ElementType = 'a'>({
  activeClassName,
  as,
  children,
  className,
  external = false,
  href,
  rel,
  target,
  to,
  underlined = false,
  unstyled = false,
  ...rest
}: LinkProps<T>) {
  const Element = as ?? 'a';
  const elementProps =
    Element === 'a'
      ? {
          href: href || to,
          rel: rel || (external ? 'noopener noreferrer' : undefined),
          target: target || (external ? '_blank' : undefined),
        }
      : {
          activeClassName,
          to: to || href,
        };
  return (
    <Element
      {...rest}
      {...elementProps}
      className={classNames(
        {
          link: !unstyled,
          'link--underlined': underlined && !unstyled,
        },
        className,
      )}
    >
      {children}
    </Element>
  );
}
