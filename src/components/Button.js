import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';

function Button({
  children,
  className,
  color = 'default',
  icon,
  iconElement,
  iconName,
  onClick,
  shape = 'rounded-corners',
  size = 'small',
  style = 'solid',
  styles,
  ...rest
}) {
  return (
    <button
      className={classNames(
        'btn',
        { [`btn--${color}`]: color },
        { [`btn--${shape}`]: shape },
        { [`btn--${style}`]: style },
        { [`btn--${size}`]: size },
        { 'btn--icon-only': icon === 'only' },
        className
      )}
      onClick={onClick}
      style={styles}
      {...rest}
    >
      {icon === 'left' && (
        <span aria-hidden className="icon-wrapper margin-right-md">
          {iconElement || <Icon name={iconName} size="inherit" />}
        </span>
      )}
      {icon === 'only' ? (
        <span aria-hidden className="icon-wrapper">
          <Icon name={iconName} size="inherit" />
        </span>
      ) : (
        children
      )}
      {icon === 'right' && (
        <span aria-hidden className="icon-wrapper margin-left-md">
          {iconElement || <Icon name={iconName} size="inherit" />}
        </span>
      )}
    </button>
  );
}

Button.color = Object.freeze({
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
});

Button.shape = Object.freeze({
  square: 'square',
  roundedCorners: 'rounded-corners',
  rounded: 'rounded',
  circle: 'circle',
});

Button.size = Object.freeze({
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
});

Button.style = Object.freeze({
  solid: 'solid',
  outline: 'outline',
  text: 'text',
  none: 'unstyled',
});

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Button.color)),
  icon: PropTypes.oneOf(['left', 'right', 'only']),
  iconElement: PropTypes.element,
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  shape: PropTypes.oneOf(Object.values(Button.shape)),
  size: PropTypes.oneOf(Object.values(Button.size)),
  style: PropTypes.oneOf(Object.values(Button.style)),
  styles: PropTypes.object,
};

export default Button;
