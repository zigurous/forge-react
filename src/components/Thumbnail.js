import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/thumbnail.css';

const Thumbnail = ({
  ariaLabel,
  backgroundImage,
  beveled,
  bevelBottomColor = 'rgba(0, 0, 0, 0.5)',
  bevelTopColor = 'rgba(255, 255, 255, 0.5)',
  className,
  foregroundImage,
  height = 256,
  href,
  rel,
  target,
}) => (
  <a
    aria-label={ariaLabel}
    className={classNames(
      'thumbnail',
      { 'thumbnail--bevel': beveled },
      className
    )}
    href={href}
    rel={rel}
    target={target}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      borderBottomColor: beveled && bevelBottomColor,
      borderTopColor: beveled && bevelTopColor,
      height: height,
    }}
  >
    {foregroundImage && (
      <img
        {...foregroundImage}
        alt={foregroundImage.alt || ''}
        src={foregroundImage.src}
      />
    )}
  </a>
);

Thumbnail.propTypes = {
  ariaLabel: PropTypes.string,
  backgroundImage: PropTypes.string,
  beveled: PropTypes.bool,
  bevelBottomColor: PropTypes.string,
  bevelTopColor: PropTypes.string,
  className: PropTypes.string,
  foregroundImage: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
  }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

export default Thumbnail;
