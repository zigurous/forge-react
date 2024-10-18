import classNames from 'classnames';
import React from 'react';
import Icon from './Icon';

export type ButtonProps = {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';
  customStyles?:
    | React.CSSProperties & {
        '--btn-color-primary'?: string;
        '--btn-color-secondary'?: string;
        '--btn-color-emphasis'?: string;
        '--btn-color-subtle'?: string;
      };
  icon?: string | React.ReactElement;
  iconAlignment?: 'left' | 'right' | 'only';
  iconSize?: 'inherit' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'square' | 'rounded-corners' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg' | 'intrinsic';
  style?: 'solid' | 'outline' | 'text' | 'unstyled';
} & React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  className,
  color = 'default',
  customStyles,
  icon,
  iconAlignment,
  iconSize = 'inherit',
  onClick,
  shape = 'rounded-corners',
  size = 'sm',
  style = 'solid',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'btn',
        { [`btn--${color}`]: color },
        { [`btn--${shape}`]: shape },
        { [`btn--${style}`]: style },
        { [`btn--${size}`]: size && size !== 'intrinsic' },
        { 'btn--icon-only': iconAlignment === 'only' },
        className,
      )}
      onClick={onClick}
      style={customStyles}
      {...rest}
    >
      {iconAlignment === 'left' && (
        <span aria-hidden className="icon-wrapper margin-right-md">
          {typeof icon === 'string' ? (
            <Icon name={icon} size={iconSize} />
          ) : (
            icon
          )}
        </span>
      )}
      {iconAlignment === 'only' ? (
        <span aria-hidden className="icon-wrapper">
          {typeof icon === 'string' ? (
            <Icon name={icon} size={iconSize} />
          ) : (
            icon
          )}
        </span>
      ) : (
        children
      )}
      {iconAlignment === 'right' && (
        <span aria-hidden className="icon-wrapper margin-left-md">
          {typeof icon === 'string' ? (
            <Icon name={icon} size={iconSize} />
          ) : (
            icon
          )}
        </span>
      )}
    </button>
  );
}
