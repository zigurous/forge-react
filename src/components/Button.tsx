import classNames from 'classnames';
import React from 'react';
import Icon, { type IconProps } from './Icon';
import type { IconElement, SemanticColorToken } from '../types';

export type ButtonProps = {
  color?: SemanticColorToken;
  icon?: IconElement;
  iconAlignment?: 'leading' | 'trailing' | 'only' | 'none';
  iconProps?: IconProps<'i'>;
  shape?: 'rounded' | 'pill' | 'circle' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: React.CSSProperties & {
    '--btn-color-primary'?: string;
    '--btn-color-secondary'?: string;
  };
  variant?: 'solid' | 'outline' | 'link' | 'text' | 'unstyled';
} & React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  className,
  color = 'default',
  icon,
  iconAlignment = 'leading',
  iconProps,
  onClick,
  shape = 'rounded',
  size,
  style,
  variant = 'solid',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'btn',
        {
          [`btn--${color}`]: color,
          [`btn--${shape}`]: shape,
          [`btn--${variant}`]: variant,
          [`btn--${size}`]: size,
          [`btn--icon-${iconAlignment}`]:
            icon && iconAlignment && iconAlignment !== 'none',
        },
        className,
      )}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {icon && iconAlignment === 'leading' && (
        <span aria-hidden className="icon-wrapper">
          <Icon icon={icon} {...iconProps} />
        </span>
      )}
      {icon && iconAlignment === 'only' ? (
        <span aria-hidden className="icon-wrapper">
          <Icon icon={icon} {...iconProps} />
        </span>
      ) : (
        children
      )}
      {icon && iconAlignment === 'trailing' && (
        <span aria-hidden className="icon-wrapper">
          <Icon icon={icon} {...iconProps} />
        </span>
      )}
    </button>
  );
}
