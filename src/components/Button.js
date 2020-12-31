import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/button.css';

const Button = ({
  borderless = false,
  children,
  circle = false,
  className,
  external,
  history,
  leftIcon,
  link,
  linkTarget = '_blank',
  onClick,
  rightIcon,
  rounded = true,
  size = 'medium',
  ...rest
}) => (
  <button
    className={classNames(
      'button-skin',
      { 'button--borderless': borderless },
      { 'button--rounded': rounded && !circle },
      { 'button--circle': circle },
      { [`button--${size}`]: size },
      className
    )}
    onClick={(event) => {
      if (onClick) {
        onClick(event);
      } else if (history && link && !external) {
        history.push(link);
      } else if (link && external) {
        window.open(link, linkTarget);
      }
    }}
    {...rest}
  >
    {leftIcon && (
      <span aria-hidden className="icon-wrapper margin-right-md">
        {leftIcon}
      </span>
    )}
    {children}
    {rightIcon && (
      <span aria-hidden className="icon-wrapper margin-left-md">
        {rightIcon}
      </span>
    )}
  </button>
);

export const buttonSizes = ['sm', 'small', 'md', 'medium', 'lg', 'large'];

Button.propTypes = {
  borderless: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  external: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  leftIcon: PropTypes.element,
  link: PropTypes.string,
  linkTarget: PropTypes.string,
  onClick: PropTypes.func,
  rightIcon: PropTypes.element,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(buttonSizes),
};

export default Button;
