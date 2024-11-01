import classNames from 'classnames';
import React from 'react';
import Button, { type ButtonProps } from './Button';
import Link from './Link';
import { socialLinks } from '../links';
import type { LinkTypeWithIcon, SocialLinkType } from '../types';

export type SocialButtonProps = {
  children?: React.ReactNode;
  className?: string;
  link: SocialLinkType;
  LinkElementType?: React.ElementType;
  primaryColor?: string;
  secondaryColor?: string;
  url?: string;
} & ButtonProps;

export default function SocialButton({
  children,
  className,
  link,
  LinkElementType = 'a',
  primaryColor,
  secondaryColor,
  url,
  ...rest
}: SocialButtonProps) {
  const social: LinkTypeWithIcon =
    typeof link === 'string' ? socialLinks[link] : link;
  const color = primaryColor || social.color;
  return (
    <Link
      as={LinkElementType}
      external={social.external || true}
      to={url || social.to}
      unstyled
    >
      <Button
        className={classNames('social-button', social.id, className)}
        icon={social.icon}
        iconProps={{ 'aria-hidden': true, type: 'social' }}
        style={{
          '--btn-color-primary': color,
          '--btn-color-secondary': secondaryColor,
        }}
        tabIndex={-1}
        {...rest}
      >
        {children || social.name}
      </Button>
    </Link>
  );
}
