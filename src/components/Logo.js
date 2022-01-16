import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import svgs from '../svg/logo';
import '../styles/logo.css';

function renderLogo(image, variant) {
  if (image) {
    return <img alt="Logo" src={image} />;
  } else {
    return svgs[variant];
  }
}

function Logo({
  className,
  fill,
  image,
  onClick,
  size = 'medium',
  style,
  variant = 'wordmark',
}) {
  return (
    <div
      className={classNames('logo', variant, size, className)}
      style={{ ...style, fill }}
    >
      {onClick ? (
        <button
          aria-label="Logo"
          onClick={(event) => {
            event.target.blur();
            onClick();
          }}
        >
          {renderLogo(image, variant)}
        </button>
      ) : (
        renderLogo(image, variant)
      )}
    </div>
  );
}

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

Logo.variant = Object.freeze({
  wordmark: 'wordmark',
  lettermark: 'lettermark',
});

Logo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(Logo.size)),
  style: PropTypes.object,
  variant: PropTypes.oneOf(Object.values(Logo.variant)),
};

export default Logo;
