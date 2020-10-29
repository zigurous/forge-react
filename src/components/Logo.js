import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import emblemMonoBlack from '../images/logo/zigurous-emblem-mono-black.svg';
import emblemMonoWhite from '../images/logo/zigurous-emblem-mono-white.svg';
import emblemPrimary from '../images/logo/zigurous-emblem-primary.svg';
import emblemSecondary from '../images/logo/zigurous-emblem-secondary.svg';
import logoMonoBlack from '../images/logo/zigurous-logo-mono-black.svg';
import logoMonoWhite from '../images/logo/zigurous-logo-mono-white.svg';
import logoPrimary from '../images/logo/zigurous-logo-primary.svg';
import logoSecondary from '../images/logo/zigurous-logo-secondary.svg';
import '../styles/logo.css';

const images = {
  emblem: {
    primary: emblemPrimary,
    secondary: emblemSecondary,
    'mono-black': emblemMonoBlack,
    'mono-white': emblemMonoWhite,
  },
  logo: {
    primary: logoPrimary,
    secondary: logoSecondary,
    'mono-black': logoMonoBlack,
    'mono-white': logoMonoWhite,
  },
};

export const logoThemes = {
  undefined: 'primary',
  white: 'primary',
  light: 'primary',
  dark: 'secondary',
  black: 'secondary',
  'brand-color': 'mono-white',
};

const Logo = ({
  altText = 'Logo',
  ariaHidden = false,
  className,
  onClick,
  size = 'medium',
  theme = 'primary',
  variant = 'logo',
}) => (
  <div className={classNames('logo', size, className)}>
    {onClick ? (
      <button
        className="logo-button"
        onClick={(event) => {
          event.target.blur();
          onClick();
        }}
      >
        <img
          alt={altText}
          aria-hidden={ariaHidden}
          className="logo-image"
          src={images[variant][theme]}
        />
      </button>
    ) : (
      <img
        alt={altText}
        aria-hidden={ariaHidden}
        className="logo-image"
        src={images[variant][theme]}
      />
    )}
  </div>
);

Logo.propTypes = {
  altText: PropTypes.string,
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['primary', 'secondary', 'mono-black', 'mono-white']),
  variant: PropTypes.oneOf(['logo', 'emblem']),
};

export default Logo;
