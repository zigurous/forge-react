import classNames from 'classnames';
import React from 'react';
import { socialIcons } from '../icons';
import { ColorTokenList, PaddingTokenList } from '../enums';
import type { ColorToken, IconElement, PaddingToken, PolymorphicProps } from '../types'; // prettier-ignore

export type BaseIconProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  color?: ColorToken | string;
  icon?: IconElement;
  padding?: PaddingToken | number | string;
  shape?: 'square' | 'rounded' | 'circle';
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number;
  type?: 'material' | 'social' | 'custom';
};

export type IconProps<T extends React.ElementType = 'i'> = PolymorphicProps<
  T,
  BaseIconProps
>;

export default function Icon<T extends React.ElementType = 'i'>({
  as,
  backgroundColor,
  children,
  className,
  color,
  icon,
  padding,
  shape,
  size = 'inherit',
  style,
  type = 'material',
  ...rest
}: IconProps<T>) {
  const Element = as ?? 'i';
  const isTokenSize =
    typeof size === 'string' &&
    ['inherit', 'xs', 'sm', 'md', 'lg', 'xl'].includes(size);
  const isTokenColor =
    typeof color === 'string' && ColorTokenList.includes(color);
  const isTokenPadding =
    typeof padding === 'string' && PaddingTokenList.includes(padding);
  return (
    <Element
      {...rest}
      className={classNames(
        {
          icon: true,
          [`icon--${shape}`]: shape,
          [`icon--${size}`]: isTokenSize,
          'icon--material': type === 'material' && typeof icon === 'string',
          'icon--social': type === 'social',
          [`text-${color}`]: isTokenColor,
          [`fill-${color}`]: isTokenColor,
          [`p-${padding}`]: isTokenPadding,
        },
        className,
      )}
      style={{
        backgroundColor: backgroundColor,
        color: isTokenColor ? undefined : color,
        fill: isTokenColor ? undefined : color,
        width: isTokenSize ? undefined : size,
        height: isTokenSize ? undefined : size,
        padding: isTokenPadding ? undefined : padding,
        ...style,
      }}
    >
      {renderIcon(icon, type)}
    </Element>
  );
}

function renderIcon(
  icon: IconElement | undefined,
  type: string,
): React.ReactNode {
  if (!icon) return null;
  if (type === 'social' && typeof icon === 'string' && icon in socialIcons) {
    const SocialIcon = socialIcons[icon];
    return <SocialIcon />;
  }
  if (typeof icon === 'function') {
    const CustomIcon = icon;
    return <CustomIcon />;
  }

  return icon;
}
