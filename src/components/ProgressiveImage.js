import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useLoaded } from '../hooks';
import '../styles/progressive-image.css';

const ProgressiveImage = ({
  alt,
  className,
  height,
  imageClassName,
  ImageElementType = 'img',
  imageProps = {},
  onLoad = () => {},
  placeholder,
  placeholderClassName,
  placeholderProps = {},
  showLoadingSpinner = false,
  src,
  width,
}) => {
  const imageRef = useRef();
  const loaded = useLoaded(imageRef, onLoad);
  return (
    <picture
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
          imageClassName,
          imageProps.className
        )}
        width={width || imageProps.width}
        height={height || imageProps.height}
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
            placeholderClassName,
            placeholderProps.className
          )}
          width={width || placeholderProps.width || imageProps.width}
          height={height || placeholderProps.height || imageProps.height}
          src={placeholder}
        />
      )}
      {showLoadingSpinner && !loaded && <LoadingSpinner />}
    </picture>
  );
};

ProgressiveImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageClassName: PropTypes.string,
  ImageElementType: PropTypes.elementType,
  imageProps: PropTypes.object,
  onLoad: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderClassName: PropTypes.string,
  placeholderProps: PropTypes.object,
  showLoadingSpinner: PropTypes.bool,
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProgressiveImage;
