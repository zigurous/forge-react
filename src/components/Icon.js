import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/icon.css';

const sizes = {
  sm: 'md-18',
  small: 'md-18',
  md: 'md-24',
  medium: 'md-24',
  lg: 'md-36',
  large: 'md-36',
  xl: 'md-48',
  extraLarge: 'md-48',
};

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
      'material-icons',
      { [sizes[size]]: size },
      { 'md-inactive': inactive },
      { 'md-dark': theme === 'dark', 'md-light': theme === 'light' },
      className
    )}
    {...props}
  >
    {name || children}
  </i>
);

Icon.propTypes = {
  ariaHidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default Icon;
