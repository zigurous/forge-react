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
  shape?: 'square' | 'rounded-corners' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg';
  style?: 'solid' | 'outline' | 'text' | 'unstyled';
} & React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  className,
  color = 'default',
  customStyles,
  icon,
  iconAlignment,
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
        { [`btn--${size}`]: size },
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
            <Icon name={icon} size="inherit" />
          ) : (
            icon
          )}
        </span>
      )}
      {iconAlignment === 'only' ? (
        <span aria-hidden className="icon-wrapper">
          {typeof icon === 'string' ? (
            <Icon name={icon} size="inherit" />
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
            <Icon name={icon} size="inherit" />
          ) : (
            icon
          )}
        </span>
      )}
    </button>
  );
}
