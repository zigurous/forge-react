'use client';

import classNames from 'classnames';
import React from 'react';

export type ToggleProps = {
  className?: string;
  label?: string;
  labelAlignment?: 'leading' | 'trailing';
  onToggle?: (toggled: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  toggled?: boolean;
} & Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'checked' | 'children' | 'onChange' | 'size' | 'type'
>;

export default function Toggle({
  className,
  id,
  label,
  labelAlignment = 'trailing',
  onToggle,
  size,
  style,
  toggled = false,
  ...rest
}: ToggleProps) {
  return (
    <span
      className={classNames('toggle', { [`toggle--${size}`]: size }, className)}
      style={style}
    >
      {label && labelAlignment === 'leading' && (
        <label className="toggle__label mr-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={e => {
          if (onToggle) {
            onToggle(e.target.checked);
          }
        }}
        {...rest}
      />
      <span
        aria-hidden
        className="toggle__slider"
        onClick={() => {
          if (onToggle) {
            onToggle(!toggled);
          }
        }}
      />
      {label && labelAlignment === 'trailing' && (
        <label className="toggle__label ml-sm" htmlFor={id}>
          {label}
        </label>
      )}
    </span>
  );
}
