import classNames from 'classnames';
import React from 'react';
import type { SemanticColorToken } from '../types';

export type BadgeProps = {
  color?: SemanticColorToken;
  interactive?: boolean;
  selected?: boolean;
  shape?: 'pill' | 'rounded' | 'circle' | 'square';
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
  interactive,
  selected = false,
  shape = 'pill',
  style,
  variant = 'solid',
  ...rest
}: BadgeProps) {
  return (
    <div
      className={classNames(
        'badge',
        {
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
      {children}
    </div>
  );
}
