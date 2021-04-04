import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useLoaded } from '../hooks';
import '../styles/progressive-image.css';

const ProgressiveImage = ({
  alt,
  className,
  ImageElementType = 'img',
  imageProps = {},
  onLoad = () => {},
  placeholder,
  placeholderProps = {},
  src,
}) => {
  const imageRef = useRef();
  const loaded = useLoaded(imageRef, onLoad);
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
          'img-fluid',
          imageProps.className
        )}
        height={imageProps.height || 'auto'}
        ref={imageRef}
        src={src}
      />
      {placeholder && (
        <ImageElementType
          {...placeholderProps}
          alt={placeholderProps.alt || alt}
          className={classNames(
            'progressive-image__placeholder',
            'img-fluid',
            placeholderProps.className
          )}
          height={placeholderProps.height || 'auto'}
          src={placeholder}
        />
      )}
    </span>
  );
};

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
