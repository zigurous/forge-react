import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../styles/progressive-image.css';

const ProgressiveImage = React.forwardRef(
  (
    {
      alt,
      className,
      ImageElementType = 'img',
      imageProps = {},
      onLoad = () => {},
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
        <ImageElementType
          {...imageProps}
          alt={imageProps.alt || alt}
          className={classNames(
            'progressive-image__source',
            imageProps.className
          )}
          onLoad={(e) => {
            if (!loaded) {
              setLoaded(true);
              onLoad(e);
            }
          }}
          ref={ref}
          src={src}
        />
        {placeholder && (
          <ImageElementType
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
  ImageElementType: PropTypes.elementType,
  imageProps: PropTypes.object,
  onLoad: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderProps: PropTypes.object,
  src: PropTypes.string,
};

export default ProgressiveImage;
