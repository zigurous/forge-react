import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageFadeIn from './ImageFadeIn';
import 'react-image-lightbox/style.css';
import '../styles/image-gallery.css';

const imageSrc = (image) => {
  if (typeof image === 'string') {
    return image;
  } else {
    return image.src;
  }
};

const ImageGallery = ({
  className,
  columns = 4,
  fadeIn = true,
  images = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className={classNames('image-gallery', className)}>
      <div
        className="image-gallery__thumbnails"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {images.map((image, index) => {
          const isObject = typeof image !== 'string';
          const className = isObject && image.className;
          const src = isObject ? image.src : image;
          const alt = (isObject && image.alt) || '';
          const id = (isObject && image.id) || src;
          const other = (isObject && image) || {};
          return (
            <button
              aria-label="Image Thumbnail"
              className={classNames('image-gallery__thumbnail', className)}
              key={id}
              onClick={() => {
                setImageIndex(index);
                setIsOpen(true);
              }}
            >
              {fadeIn ? (
                <ImageFadeIn {...other} alt={alt} src={src} />
              ) : (
                <img {...other} alt={alt} src={src} />
              )}
            </button>
          );
        })}
      </div>
      {isOpen && (
        <Lightbox
          enableZoom={false}
          mainSrc={imageSrc(images[imageIndex])}
          nextSrc={imageSrc(images[(imageIndex + 1) % images.length])}
          prevSrc={imageSrc(
            images[(imageIndex + images.length - 1) % images.length]
          )}
          onCloseRequest={() => {
            setIsOpen(false);
          }}
          onMovePrevRequest={() => {
            setImageIndex((imageIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setImageIndex((imageIndex + 1) % images.length);
          }}
          wrapperClassName="image-gallery__lightbox"
        />
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.number,
  fadeIn: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        alt: PropTypes.string,
        className: PropTypes.string,
        src: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ])
  ),
};

export default ImageGallery;
