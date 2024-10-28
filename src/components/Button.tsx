import classNames from 'classnames';
import React from 'react';
import Icon, { IconProps } from './Icon';
import type { SemanticColorToken } from '../types';

export type ButtonProps = {
  color?: SemanticColorToken;
  icon?: string | React.ReactElement;
  iconAlignment?: 'leading' | 'trailing' | 'only' | 'none';
  iconProps?: IconProps;
  shape?: 'square' | 'rounded' | 'pill' | 'circle';
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
        { [`btn--${color}`]: color },
        { [`btn--${shape}`]: shape },
        { [`btn--${variant}`]: variant },
        { [`btn--${size}`]: size },
        {
          [`btn--icon-${iconAlignment}`]:
            icon && iconAlignment && iconAlignment !== 'none',
        },
        className,
      )}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {iconAlignment === 'leading' && (
        <span aria-hidden className="icon-wrapper">
          {typeof icon === 'string' ? (
            <Icon name={icon} {...iconProps} />
          ) : (
            icon
          )}
        </span>
      )}
      {iconAlignment === 'only' ? (
        <span aria-hidden className="icon-wrapper">
          {typeof icon === 'string' ? (
            <Icon name={icon} size={size} {...iconProps} />
          ) : (
            icon
          )}
        </span>
      ) : (
        children
      )}
      {iconAlignment === 'trailing' && (
        <span aria-hidden className="icon-wrapper">
          {typeof icon === 'string' ? (
            <Icon name={icon} {...iconProps} />
          ) : (
            icon
          )}
        </span>
      )}
    </button>
  );
}
