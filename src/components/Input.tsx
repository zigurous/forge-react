'use client';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Icon, { type IconProps } from './Icon';
import Stack from './Stack';
import Text from './Text';
import type { IconElement } from '../types';

export type InputProps = {
  className?: string;
  disabled?: boolean;
  icon?: IconElement;
  iconAlignment?: 'leading' | 'trailing';
  iconProps?: IconProps<'i'>;
  label?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'children'>;

export default function Input({
  className,
  disabled,
  icon,
  iconAlignment = 'trailing',
  iconProps,
  label,
  onBlur,
  onFocus,
  size,
  ...rest
}: InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  return (
    <InputContainer label={label}>
      <div
        className={classNames(
          'input-wrapper',
          {
            [`input-wrapper--${size}`]: size,
            [`input-wrapper--icon-${iconAlignment}`]: icon && iconAlignment,
            focused: focused,
            disabled: disabled,
          },
          className,
        )}
      >
        <input
          className={classNames({
            empty: !Boolean(ref.current?.value || rest.value),
          })}
          disabled={disabled}
          onBlur={event => {
            setFocused(false);
            if (onBlur) {
              onBlur(event);
            }
          }}
          onFocus={event => {
            setFocused(true);
            if (onFocus) {
              onFocus(event);
            }
          }}
          ref={ref}
          {...rest}
        />
        {icon && <Icon aria-hidden icon={icon} {...iconProps} />}
      </div>
    </InputContainer>
  );
}

function InputContainer({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  if (!label) return <>{children}</>;
  return (
    <Stack className="input-container" layout="vertical" inline>
      <Text color="subtle" className="ml-xxxs mb-xxs" type="caption">
        {label}
      </Text>
      {children}
    </Stack>
  );
}
