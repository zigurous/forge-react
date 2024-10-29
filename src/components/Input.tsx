import classNames from 'classnames';
import React, { useState } from 'react';
import Icon, { IconProps } from './Icon';

export type InputProps = {
  className?: string;
  disabled?: boolean;
  icon?: string;
  iconAlignment?: 'leading' | 'trailing';
  iconProps?: IconProps;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  size?: 'sm' | 'md' | 'lg';
} & React.ComponentPropsWithRef<'input'>;

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
        <Icon className="input-wrapper__icon" name={icon} {...iconProps} />
      )}
    </div>
  );
}
