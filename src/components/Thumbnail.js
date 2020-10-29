import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/thumbnail.css';

const Thumbnail = ({
  altText = '',
  ariaHidden = false,
  className,
  href,
  rel,
  src,
  target,
}) => (
  <div className="thumbnail">
    {href ? (
      <a
        className={classNames('thumbnail-link', className)}
        href={href}
        rel={rel}
        target={target}
      >
        <img
          alt={altText}
          aria-hidden={ariaHidden}
          className="thumbnail-image"
          src={src}
        />
      </a>
    ) : (
      <img
        alt={altText}
        aria-hidden={ariaHidden}
        className={classNames('thumbnail-image', className)}
        src={src}
      />
    )}
  </div>
);

Thumbnail.propTypes = {
  altText: PropTypes.string,
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  href: PropTypes.string,
  rel: PropTypes.string,
  src: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default Thumbnail;
