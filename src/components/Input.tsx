import classNames from 'classnames';
import React, { useState } from 'react';
import Icon, { type IconProps } from './Icon';
import type { IconElement } from '../types';

export type InputProps = {
  className?: string;
  disabled?: boolean;
  icon?: IconElement;
  iconAlignment?: 'leading' | 'trailing';
  iconProps?: IconProps<'i'>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & Omit<React.ComponentPropsWithRef<'input'>, 'size'>;

export default function Input({
  className,
  disabled,
  icon,
  iconAlignment = 'trailing',
  iconProps,
  onBlur,
  onFocus,
  size,
  ...rest
}: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={classNames(
        'input-wrapper',
        { [`input-wrapper--${size}`]: size },
        { [`input-wrapper--icon-${iconAlignment}`]: icon && iconAlignment },
        { focused: focus, disabled: disabled },
        className,
      )}
    >
      <input
        className="input-wrapper__input"
        disabled={disabled}
        onBlur={event => {
          setFocus(false);
          if (onBlur) {
            onBlur(event);
          }
        }}
        onFocus={event => {
          setFocus(true);
          if (onFocus) {
            onFocus(event);
          }
        }}
        {...rest}
      />
      {icon && (
        <Icon className="input-wrapper__icon" icon={icon} {...iconProps} />
      )}
    </div>
  );
}
