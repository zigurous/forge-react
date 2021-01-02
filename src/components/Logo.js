import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '../svg/logo';
import '../styles/logo.css';

const Logo = ({
  className,
  fill,
  onClick,
  size = 'medium',
  theme,
  variant = 'wordmark',
}) => (
  <div
    className={classNames('logo', variant, theme, size, className)}
    style={{ fill }}
  >
    {onClick ? (
      <button
        className="logo-button"
        onClick={(event) => {
          event.target.blur();
          onClick();
        }}
      >
        {images[variant]}
      </button>
    ) : (
      images[variant]
    )}
  </div>
);

Logo.size = Object.freeze({
  xs: 'xs',
  extraSmall: 'extraSmall',
  sm: 'sm',
  small: 'small',
  md: 'md',
  medium: 'medium',
  lg: 'lg',
  large: 'large',
  xl: 'xl',
  extraLarge: 'extraLarge',
});

Logo.theme = Object.freeze({
  dark: 'dark',
  light: 'light',
});

Logo.variant = Object.freeze({
  wordmark: 'wordmark',
  lettermark: 'lettermark',
});

Logo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(Logo.size)),
  theme: PropTypes.oneOf(Object.values(Logo.theme)),
  variant: PropTypes.oneOf(Object.values(Logo.variant)),
};

export default Logo;
