import classNames from 'classnames';
import React, { useState } from 'react';
import Icon from './Icon';

export type InputProps = {
  className?: string;
  disabled?: boolean;
  icon?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  iconAlignment?: 'left' | 'right';
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  size?: 'sm' | 'md' | 'lg';
} & React.ComponentPropsWithRef<'input'>;

export default function Input({
  className,
  disabled,
  icon,
  iconSize = 'md',
  iconAlignment = 'right',
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
        <Icon className="input-wrapper__icon" name={icon} size={iconSize} />
      )}
    </div>
  );
}
