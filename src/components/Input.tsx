import classNames from 'classnames';
import React, { useState } from 'react';
import Icon, { IconProps } from './Icon';

export type InputProps = {
  className?: string;
  disabled?: boolean;
  icon?: string;
  iconAlignment?: 'left' | 'right';
  iconProps?: IconProps;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  size?: 'sm' | 'md' | 'lg';
} & React.ComponentPropsWithRef<'input'>;

export default function Input({
  className,
  disabled,
  icon,
  iconAlignment = 'right',
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
        { 'flex-row': icon && iconAlignment === 'right' },
        { 'flex-row-reverse': icon && iconAlignment === 'left' },
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
        <Icon
          className={classNames('input-wrapper__icon', {
            'mr-xxs': iconAlignment === 'left',
            'ml-xxs': iconAlignment === 'right',
          })}
          name={icon}
          {...iconProps}
        />
      )}
    </div>
  );
}
