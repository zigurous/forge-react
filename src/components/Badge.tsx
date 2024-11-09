import classNames from 'classnames';
import React from 'react';
import Icon, { type IconProps } from './Icon';
import type { IconElement, SemanticColorToken } from '../types';

export type BadgeProps = {
  color?: SemanticColorToken;
  icon?: IconElement;
  iconAlignment?: 'leading' | 'trailing' | 'only' | 'none';
  iconProps?: IconProps<'i'>;
  interactive?: boolean;
  selected?: boolean;
  shape?: 'pill' | 'rounded' | 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties & {
    '--badge-color-primary'?: string;
    '--badge-color-secondary'?: string;
  };
  variant?: 'solid' | 'outline' | 'tint';
} & React.ComponentPropsWithRef<'div'>;

export default function Badge({
  children,
  className,
  color = 'default',
  icon,
  iconAlignment = 'leading',
  iconProps,
  interactive,
  selected = false,
  shape = 'pill',
  size,
  style,
  variant = 'solid',
  ...rest
}: BadgeProps) {
  return (
    <div
      className={classNames(
        'badge',
        {
          [`badge--${size}`]: size,
          [`badge--${color}`]: color,
          [`badge--${variant}`]: variant,
          [`badge--${shape}`]: shape,
          'badge--interactive': interactive,
          'badge--selected': selected,
        },
        className,
      )}
      style={style}
      {...rest}
    >
      {icon && iconAlignment === 'leading' && (
        <>
          <Icon aria-hidden icon={icon} {...iconProps} />
          <span aria-hidden>&#160;</span>
        </>
      )}
      {icon && iconAlignment === 'only' ? (
        <Icon aria-hidden icon={icon} {...iconProps} />
      ) : (
        children
      )}
      {icon && iconAlignment === 'trailing' && (
        <>
          <span aria-hidden>&#160;</span>
          <Icon aria-hidden icon={icon} {...iconProps} />
        </>
      )}
    </div>
  );
}
