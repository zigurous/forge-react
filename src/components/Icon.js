import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({
  ariaHidden = true,
  children,
  className,
  inactive,
  name,
  size = 'medium',
  theme = 'dark',
  ...props
}) => (
  <i
    aria-hidden={ariaHidden}
    className={classNames(
      'icon',
      { [`icon--${size}`]: size },
      { [`icon--${theme}`]: theme },
      { 'icon--inactive': inactive },
      'material-icon',
      className
    )}
    {...props}
  >
    {name || children}
  </i>
);

Icon.size = Object.freeze({
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
  xl: 'xl',
  extraLarge: 'extraLarge',
});

Icon.theme = Object.freeze({
  dark: 'dark',
  light: 'light',
});

Icon.propTypes = {
  ariaHidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(Icon.size)),
  theme: PropTypes.oneOf(Object.values(Icon.theme)),
};

export default Icon;
