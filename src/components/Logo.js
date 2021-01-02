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

export const logoSizes = [
  'xs',
  'extraSmall',
  'sm',
  'small',
  'md',
  'medium',
  'lg',
  'large',
  'xl',
  'extraLarge',
];

export const logoThemes = ['dark', 'light'];
export const logoVariants = ['wordmark', 'lettermark'];

Logo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(logoSizes),
  theme: PropTypes.oneOf(logoThemes),
  variant: PropTypes.oneOf(logoVariants),
};

export default Logo;
