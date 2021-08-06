import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({
  ariaHidden = true,
  children,
  className,
  inactive,
  material = true,
  name,
  size = 'medium',
  theme,
  ...props
}) => (
  <i
    aria-hidden={ariaHidden}
    className={classNames(
      'icon',
      { [`icon--${size}`]: size },
      { [`icon--${theme}`]: theme },
      { 'icon--active': !inactive },
      { 'icon--inactive': inactive },
      { 'material-icon': material },
      className
    )}
    {...props}
  >
    {name || children}
  </i>
);

Icon.size = Object.freeze({
  inherit: 'inherit',
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
  light: 'light',
  dark: 'dark',
});

Icon.propTypes = {
  ariaHidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  material: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(Icon.size)),
  theme: PropTypes.oneOf(Object.values(Icon.theme)),
};

export default Icon;
