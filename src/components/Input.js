import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Icon from './Icon';
import '../styles/input.css';

function Input({
  className,
  disabled,
  icon,
  iconAlignment = 'right',
  onBlur = () => {},
  onChange = () => {},
  onFocus = () => {},
  placeholder,
  size,
  type,
  value,
  ...props
}) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={classNames(
        'input-wrapper',
        { [`input-wrapper--${size}`]: size },
        { [`input-wrapper--icon-${iconAlignment}`]: icon && iconAlignment },
        { focus: focus, disabled: disabled },
        className
      )}
    >
      <input
        className="input-wrapper__input"
        disabled={disabled}
        onBlur={() => {
          setFocus(false);
          onBlur();
        }}
        onChange={onChange}
        onFocus={() => {
          setFocus(true);
          onFocus();
        }}
        placeholder={placeholder}
        type={type}
        value={value}
        {...props}
      />
      {icon && <Icon className="input-wrapper__icon" name={icon} size="md" />}
    </div>
  );
}

Input.size = Object.freeze({
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
});

Input.iconAlignment = Object.freeze({
  left: 'left',
  right: 'right',
});

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconAlignment: PropTypes.oneOf(Object.values(Input.iconAlignment)),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Input.size)),
  type: PropTypes.string,
  value: PropTypes.any,
};

export default Input;
