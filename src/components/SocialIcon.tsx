import classNames from 'classnames';
import React from 'react';
import { socialIcons } from '../icons';
import type { PolymorphicProps, SVGIcon } from '../types';

export type BaseSocialIconProps = {
  backgroundColor?: string;
  className?: string;
  foregroundColor?: string;
  icon?: string | SVGIcon;
  innerPadding?: number | string;
  rounded?: boolean;
  size?: number | string;
};

export type SocialIconProps<T extends React.ElementType = 'i'> =
  PolymorphicProps<T, BaseSocialIconProps>;

export default function SocialIcon<T extends React.ElementType = 'i'>({
  as,
  backgroundColor,
  className,
  foregroundColor,
  icon,
  innerPadding = 8,
  rounded = false,
  size = 24,
  style,
  ...rest
}: SocialIconProps<T>) {
  const Element = as ?? 'i';
  const Icon =
    icon && typeof icon === 'string' && icon in socialIcons
      ? socialIcons[icon as keyof typeof socialIcons]
      : icon;
  return (
    <Element
      {...rest}
      className={classNames(
        'icon',
        'social-icon',
        { 'social-icon--rounded': rounded },
        { [icon as string]: typeof icon === 'string' },
        className,
      )}
      style={{
        backgroundColor: backgroundColor,
        fill: foregroundColor,
        width: size !== 'inherit' ? size : undefined,
        height: size !== 'inherit' ? size : undefined,
        padding: innerPadding,
        ...style,
      }}
    >
      {Icon && <Icon />}
    </Element>
  );
}
