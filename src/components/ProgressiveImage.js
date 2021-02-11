import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/progressive-image.css';

const ProgressiveImage = React.forwardRef(
  (
    {
      alt,
      className,
      imageProps = {},
      placeholder,
      placeholderProps = {},
      src,
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <span
        className={classNames(
          'progressive-image',
          { 'progressive-image--loaded': loaded },
          { 'progressive-image--no-placeholder': !placeholder },
          className
        )}
      >
        <img
          {...imageProps}
          alt={imageProps.alt || alt}
          className={classNames(
            'progressive-image__source',
            imageProps.className
          )}
          onLoad={() => {
            setLoaded(true);
          }}
          ref={ref}
          src={src}
        />
        {placeholder && (
          <img
            {...placeholderProps}
            alt={placeholderProps.alt || alt}
            className={classNames(
              'progressive-image__placeholder',
              placeholderProps.className
            )}
            src={placeholder}
          />
        )}
      </span>
    );
  }
);

ProgressiveImage.displayName = 'ProgressiveImage';
ProgressiveImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imageProps: PropTypes.object,
  placeholder: PropTypes.string,
  placeholderProps: PropTypes.object,
  src: PropTypes.string.isRequired,
};

export default ProgressiveImage;
