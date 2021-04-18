import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import '../styles/button.css';

const Button = ({
  borderless = false,
  children,
  circle = false,
  className,
  external,
  history,
  icon,
  iconElement,
  iconName,
  iconSize,
  link,
  linkTarget = '_blank',
  onClick,
  rounded = true,
  size = 'medium',
  ...rest
}) => (
  <button
    className={classNames(
      'btn',
      { 'btn--borderless': borderless },
      { 'btn--rounded': rounded && !circle },
      { 'btn--circle': circle },
      { [`btn--${size}`]: size },
      { 'btn--icon-only': icon === 'only' },
      className
    )}
    onClick={(event) => {
      if (history && link && !external) {
        history.push(link);
      } else if (typeof window !== 'undefined' && link && external) {
        window.open(link, linkTarget);
      }
      if (onClick) {
        onClick(event);
      }
    }}
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

Button.size = Object.freeze({
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
});

Button.propTypes = {
  ariaLabel: PropTypes.string,
  borderless: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  external: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  icon: PropTypes.oneOf(['left', 'right', 'only']),
  iconElement: PropTypes.element,
  iconName: PropTypes.string,
  iconSize: PropTypes.oneOf(Object.values(Icon.size)),
  link: PropTypes.string,
  linkTarget: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Button.size)),
};

export default Button;
