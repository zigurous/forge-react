import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/logo.css';

const images = {
  wordmark: {
    dark:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 149 48'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M132.18,24.68a4.71,4.71,0,0,0-1.84-1.39,23.12,23.12,0,0,0-2.72-.88,10.74,10.74,0,0,1-2.14-.67,1.07,1.07,0,0,1-.69-1,1.05,1.05,0,0,1,.43-.88,2.08,2.08,0,0,1,1.24-.32A2.34,2.34,0,0,1,128,20a1.92,1.92,0,0,1,.69,1.29h4.25a5.68,5.68,0,0,0-1.87-3.85A6.45,6.45,0,0,0,126.6,16a7.74,7.74,0,0,0-3.3.64,4.82,4.82,0,0,0-2.1,1.74,4.38,4.38,0,0,0-.71,2.44,3.8,3.8,0,0,0,.78,2.52,4.64,4.64,0,0,0,1.85,1.37,19.77,19.77,0,0,0,2.7.82,13.85,13.85,0,0,1,2.18.71,1.07,1.07,0,0,1,.67,1,1.09,1.09,0,0,1-.47.91,2.24,2.24,0,0,1-1.33.35,2.48,2.48,0,0,1-1.59-.51,1.81,1.81,0,0,1-.73-1.3H120a5,5,0,0,0,1,2.71,6,6,0,0,0,2.42,1.91,8.29,8.29,0,0,0,3.5.7,8.08,8.08,0,0,0,3.22-.61,4.89,4.89,0,0,0,2.12-1.69,4.23,4.23,0,0,0,.74-2.44A4,4,0,0,0,132.18,24.68Z'/%3E%3Cpolygon class='cls-1' points='16 10 16 14.5 25.45 14.5 24.4 16 16.35 27.5 16 28 16 32 19.4 32 32 32 32 27.5 22.55 27.5 30.6 16 31.65 14.5 32 14 32 10 28.6 10 16 10'/%3E%3Cpath class='cls-1' d='M92,16a8,8,0,1,0,8,8V24A8,8,0,0,0,92,16Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,92,28Z'/%3E%3Cpath class='cls-1' d='M78,17.81V16H73v9.06a3,3,0,0,1-6,0V16H62v9.5a6.49,6.49,0,0,0,5,6.32,6.16,6.16,0,0,0,1.5.18A6.48,6.48,0,0,0,73,30.19V32h5V24a4,4,0,0,1,4-4h1V16l-.5,0A6.48,6.48,0,0,0,78,17.81Z'/%3E%3Cpath class='cls-1' d='M113,20.81v4.25a3,3,0,0,1-6,0V16h-5v9.5a6.49,6.49,0,0,0,5,6.32,6.16,6.16,0,0,0,1.5.18,6.48,6.48,0,0,0,4.5-1.81V32h5V16h-5Z'/%3E%3Cpath class='cls-1' d='M54,17.44A6.34,6.34,0,0,0,50,16c-3.87,0-7,3.58-7,8a8.93,8.93,0,0,0,.85,3.83,7.64,7.64,0,0,0,2.6,3.06,6.23,6.23,0,0,0,7.1,0,4.71,4.71,0,0,0,.45-.33V32.5A3.78,3.78,0,0,1,50,36a4.24,4.24,0,0,1-2.6-.85l-2.23,3.18a9.34,9.34,0,0,0,8.83,1,7.48,7.48,0,0,0,5-6.82V16H54ZM51,28a4,4,0,0,1-3.68-2.45A3.8,3.8,0,0,1,47,24a4,4,0,1,1,7.52,1.9,4.28,4.28,0,0,1-.52.74A4,4,0,0,1,51,28Z'/%3E%3Crect class='cls-1' x='35' y='16' width='5' height='16'/%3E%3Cpath class='cls-1' d='M37.5,9A2.74,2.74,0,0,0,35,10.54a2.46,2.46,0,0,0,0,2.16,2.79,2.79,0,0,0,5,0,2.46,2.46,0,0,0,0-2.16A2.74,2.74,0,0,0,37.5,9Z'/%3E%3Crect class='cls-2' width='149' height='48'/%3E%3C/svg%3E",
    light:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 149 48'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none;%7D%3C/style%3E%3C/defs%3E%3Cpath d='M132.18,24.68a4.71,4.71,0,0,0-1.84-1.39,23.12,23.12,0,0,0-2.72-.88,10.74,10.74,0,0,1-2.14-.67,1.07,1.07,0,0,1-.69-1,1.05,1.05,0,0,1,.43-.88,2.08,2.08,0,0,1,1.24-.32A2.34,2.34,0,0,1,128,20a1.92,1.92,0,0,1,.69,1.29h4.25a5.68,5.68,0,0,0-1.87-3.85A6.45,6.45,0,0,0,126.6,16a7.74,7.74,0,0,0-3.3.64,4.82,4.82,0,0,0-2.1,1.74,4.38,4.38,0,0,0-.71,2.44,3.8,3.8,0,0,0,.78,2.52,4.64,4.64,0,0,0,1.85,1.37,19.77,19.77,0,0,0,2.7.82,13.85,13.85,0,0,1,2.18.71,1.07,1.07,0,0,1,.67,1,1.09,1.09,0,0,1-.47.91,2.24,2.24,0,0,1-1.33.35,2.48,2.48,0,0,1-1.59-.51,1.81,1.81,0,0,1-.73-1.3H120a5,5,0,0,0,1,2.71,6,6,0,0,0,2.42,1.91,8.29,8.29,0,0,0,3.5.7,8.08,8.08,0,0,0,3.22-.61,4.89,4.89,0,0,0,2.12-1.69,4.23,4.23,0,0,0,.74-2.44A4,4,0,0,0,132.18,24.68Z'/%3E%3Cpolygon points='16 10 16 14.5 25.45 14.5 24.4 16 16.35 27.5 16 28 16 32 19.4 32 32 32 32 27.5 22.55 27.5 30.6 16 31.65 14.5 32 14 32 10 28.6 10 16 10'/%3E%3Cpath d='M92,16a8,8,0,1,0,8,8V24A8,8,0,0,0,92,16Zm0,12a4,4,0,1,1,4-4A4,4,0,0,1,92,28Z'/%3E%3Cpath d='M78,17.81V16H73v9.06a3,3,0,0,1-6,0V16H62v9.5a6.49,6.49,0,0,0,5,6.32,6.16,6.16,0,0,0,1.5.18A6.48,6.48,0,0,0,73,30.19V32h5V24a4,4,0,0,1,4-4h1V16l-.5,0A6.48,6.48,0,0,0,78,17.81Z'/%3E%3Cpath d='M113,20.81v4.25a3,3,0,0,1-6,0V16h-5v9.5a6.49,6.49,0,0,0,5,6.32,6.16,6.16,0,0,0,1.5.18,6.48,6.48,0,0,0,4.5-1.81V32h5V16h-5Z'/%3E%3Cpath d='M54,17.44A6.34,6.34,0,0,0,50,16c-3.87,0-7,3.58-7,8a8.93,8.93,0,0,0,.85,3.83,7.64,7.64,0,0,0,2.6,3.06,6.23,6.23,0,0,0,7.1,0,4.71,4.71,0,0,0,.45-.33V32.5A3.78,3.78,0,0,1,50,36a4.24,4.24,0,0,1-2.6-.85l-2.23,3.18a9.34,9.34,0,0,0,8.83,1,7.48,7.48,0,0,0,5-6.82V16H54ZM51,28a4,4,0,0,1-3.68-2.45A3.8,3.8,0,0,1,47,24a4,4,0,1,1,7.52,1.9,4.28,4.28,0,0,1-.52.74A4,4,0,0,1,51,28Z'/%3E%3Crect x='35' y='16' width='5' height='16'/%3E%3Cpath d='M37.5,9A2.74,2.74,0,0,0,35,10.54a2.46,2.46,0,0,0,0,2.16,2.79,2.79,0,0,0,5,0,2.46,2.46,0,0,0,0-2.16A2.74,2.74,0,0,0,37.5,9Z'/%3E%3Crect class='cls-1' width='149' height='48'/%3E%3C/svg%3E",
  },
  lettermark: {
    dark:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpolygon class='cls-1' points='382.86 331.61 382.86 383.97 311.3 383.97 347.95 331.61 382.86 331.61'/%3E%3Cpolygon class='cls-1' points='380.54 127.97 237.87 331.61 313.05 331.61 276.39 383.97 129.19 383.97 271.74 180.33 308.39 127.97 380.54 127.97'/%3E%3Cpolygon class='cls-1' points='272.32 127.97 235.66 180.33 150.14 180.33 150.14 127.97 272.32 127.97'/%3E%3C/svg%3E",
    light:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpolygon points='382.81 331.67 382.81 384.03 311.24 384.03 347.9 331.67 382.81 331.67'/%3E%3Cpolygon points='380.48 128.03 237.93 331.67 312.99 331.67 276.33 384.03 129.13 384.03 271.68 180.39 308.33 128.03 380.48 128.03'/%3E%3Cpolygon points='272.26 128.03 235.6 180.39 150.08 180.39 150.08128.03 272.26 128.03'/%3E%3C/svg%3E",
  },
};

const Logo = ({
  altText = 'Logo',
  ariaHidden = false,
  autoAdjustMargin = false,
  className,
  onClick,
  size = 'medium',
  shadowed = false,
  theme = 'light',
  variant = 'wordmark',
}) => (
  <div
    className={classNames(
      'logo',
      { 'logo--shadowed': shadowed },
      { 'logo--adjust-margin': autoAdjustMargin },
      { logomark: variant === 'logomark' },
      size,
      className
    )}
  >
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
  altText: PropTypes.string,
  ariaHidden: PropTypes.bool,
  autoAdjustMargin: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(logoSizes),
  shadowed: PropTypes.bool,
  theme: PropTypes.oneOf(logoThemes),
  variant: PropTypes.oneOf(logoVariants),
};

export default Logo;
