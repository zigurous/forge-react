import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import '../styles/button.css';

const Button = ({
  appearance = 'default',
  children,
  className,
  external,
  history,
  icon,
  iconElement,
  iconName,
  link,
  linkTarget = '_blank',
  onClick,
  shape = 'rounded-corners',
  size = 'small',
  style = 'solid',
  styles,
  ...rest
}) => (
  <button
    className={classNames(
      'btn',
      { [`btn--${appearance}`]: appearance },
      { [`btn--${shape}`]: shape },
      { [`btn--${style}`]: style },
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

Button.appearance = Object.freeze({
  default: 'default',
  primary: 'primary',
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
  appearance: PropTypes.oneOf(Object.values(Button.appearance)),
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  ElementType: PropTypes.elementType,
  external: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  icon: PropTypes.oneOf(['left', 'right', 'only']),
  iconElement: PropTypes.element,
  iconName: PropTypes.string,
  link: PropTypes.string,
  linkTarget: PropTypes.string,
  onClick: PropTypes.func,
  shape: PropTypes.oneOf(Object.values(Button.shape)),
  size: PropTypes.oneOf(Object.values(Button.size)),
  style: PropTypes.oneOf(Object.values(Button.style)),
  styles: PropTypes.object,
};

export default Button;
