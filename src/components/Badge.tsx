import classNames from 'classnames';
import React from 'react';
import type { SemanticColorToken } from '../types';

export type BadgeProps = {
  color?: SemanticColorToken;
  selected?: boolean;
  shape?: 'square' | 'pill' | 'rounded';
  style?: React.CSSProperties & {
    '--badge-color-primary'?: string;
    '--badge-color-secondary'?: string;
  };
  type?: 'solid' | 'outline';
} & React.ComponentPropsWithRef<'div'>;

export default function Badge({
  children,
  className,
  color = 'default',
  selected = false,
  shape = 'pill',
  style,
  type = 'solid',
  ...rest
}: BadgeProps) {
  return (
    <div
      className={classNames(
        'badge',
        { [`badge--${color}`]: color },
        { [`badge--${type}`]: type },
        { [`badge--${shape}`]: shape },
        { 'badge--selected': selected },
        className,
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
