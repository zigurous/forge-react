import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/button.css';

const Button = ({
  children,
  circle = false,
  className,
  leftIcon,
  rightIcon,
  rounded = true,
  size = 'medium',
  ...rest
}) => (
  <button
    className={classNames(
      'button-skin',
      { 'button--rounded': rounded && !circle },
      { 'button--circle': circle },
      { [`button--${size}`]: size },
      className
    )}
    {...rest}
  >
    {leftIcon}
    {children}
    {rightIcon}
  </button>
);

export const buttonSizes = ['sm', 'small', 'md', 'medium', 'lg', 'large'];

Button.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  size: PropTypes.oneOf(buttonSizes),
};

export default Button;
